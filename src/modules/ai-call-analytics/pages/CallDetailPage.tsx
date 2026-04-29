'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
    ArrowLeft, Phone, Brain, Flag, Shield, Headphones,
    AlertTriangle, CheckCircle, XCircle, Play, Pause, Volume2,
} from 'lucide-react';
import { useCallDetail } from '../hooks/useCallDetail';
import { ErrorBanner } from '../components/ErrorBanner';
import { aiCallService } from '../services/aiCallService';
import type { StatusColor } from '../types/callAnalytics.types';

const COLOR_BADGE: Record<StatusColor, { bg: string; text: string; label: string }> = {
    green: { bg: 'bg-emerald-100', text: 'text-emerald-800', label: 'Healthy' },
    yellow: { bg: 'bg-amber-100', text: 'text-amber-800', label: 'Needs Attention' },
    red: { bg: 'bg-red-100', text: 'text-red-800', label: 'Critical' },
};

interface Props {
    callId: number | string;
    onBack?: () => void;
}

export default function CallDetailPage({ callId, onBack }: Props) {
    const { data: call, loading, error, refetch } = useCallDetail(callId);

    if (loading) {
        return (
            <div className="max-w-[900px] mx-auto px-4 lg:px-6">
                <div className="animate-pulse space-y-4 pt-4">
                    <div className="h-8 w-48 bg-slate-200 rounded-lg" />
                    <div className="h-64 bg-slate-100 rounded-xl" />
                    <div className="h-48 bg-slate-100 rounded-xl" />
                    <div className="h-20 bg-slate-100 rounded-xl" />
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-[900px] mx-auto px-4 lg:px-6 pt-4">
                {onBack && (
                    <button onClick={onBack} className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 mb-4 transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to calls
                    </button>
                )}
                <ErrorBanner message={error} onRetry={refetch} autoRetrySeconds={10} />
            </div>
        );
    }

    if (!call) return null;

    const badge = COLOR_BADGE[call.status_color];

    return (
        <div className="max-w-[900px] mx-auto px-4 lg:px-6">
            {/* Back + Header */}
            {onBack && (
                <button onClick={onBack} className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 mb-4 transition-colors">
                    <ArrowLeft className="h-4 w-4" /> Back to calls
                </button>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
                <div>
                    <h1 className="text-xl font-bold text-slate-900">Call Detail</h1>
                    <p className="text-sm text-slate-500 font-mono mt-1">{call.call_id}</p>
                </div>
                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold ${badge.bg} ${badge.text} self-start`}>
                    {call.status_color === 'green' && <CheckCircle className="h-4 w-4" />}
                    {call.status_color === 'yellow' && <AlertTriangle className="h-4 w-4" />}
                    {call.status_color === 'red' && <XCircle className="h-4 w-4" />}
                    {badge.label}
                </span>
            </div>

            {/* Section 1: Core Info */}
            <Section title="Call Information" icon={<Phone className="h-4 w-4" />}>
                <Grid>
                    <Field label="Call ID" value={call.call_id} mono />
                    <Field label="Caller Number" value={call.caller_number} />
                    <Field label="Location ID" value={call.location_id} mono />
                    <Field label="Agent ID" value={call.agent_id || '—'} mono />
                    <Field label="Call Status" value={call.call_status} badge />
                    <Field label="Duration" value={call.duration_seconds ? `${Math.floor(call.duration_seconds / 60)}m ${call.duration_seconds % 60}s` : '—'} />
                    <Field label="Date/Time" value={new Date(call.call_datetime).toLocaleString()} />
                    <Field label="Success Status" value={call.success_status} badge />
                </Grid>
            </Section>

            {/* Section 2: AI Analysis */}
            <Section title="AI Analysis" icon={<Brain className="h-4 w-4" />}>
                {call.summary && (
                    <div className="mb-4 rounded-lg bg-slate-50 border border-slate-200 p-4">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Summary</p>
                        <p className="text-sm text-slate-700 leading-relaxed">{call.summary}</p>
                    </div>
                )}
                <Grid>
                    <Field label="Customer Intent" value={call.customer_intent} badge />
                    <Field label="Sentiment" value={call.sentiment} badge />
                    <Field label="Emotion" value={call.emotion || '—'} badge />
                    <Field label="Success Score" value={call.success_score !== null ? `${call.success_score}%` : '—'} />
                </Grid>
            </Section>

            {/* Section 3: Actions & Issues */}
            <Section title="Actions & Issues" icon={<Flag className="h-4 w-4" />}>
                <Grid>
                    <Field label="Action Taken" value={call.action_taken || 'None recorded'} />
                    <Field label="Issue Detected" value={call.issue_detected} badge />
                    <Field label="Follow-up Required" value={call.follow_up_required ? 'Yes' : 'No'} highlight={call.follow_up_required} />
                    <Field label="Follow-up Reason" value={call.follow_up_reason || '—'} />
                </Grid>
            </Section>

            {/* Section 4: Recording Player */}
            <Section title="Recording" icon={<Headphones className="h-4 w-4" />}>
                {call.has_recording ? (
                    <RecordingPlayer callId={call.id} />
                ) : (
                    <div className="flex items-center gap-2 text-sm text-slate-400 py-2">
                        <Volume2 className="h-4 w-4" />
                        <span>No recording available for this call</span>
                    </div>
                )}
            </Section>

            {/* Section 5: Data Source */}
            <Section title="Data Source" icon={<Shield className="h-4 w-4" />}>
                <div className="text-xs text-slate-500 space-y-1">
                    <p><span className="font-medium">Internal ID:</span> {call.id}</p>
                    <p><span className="font-medium">Status Color:</span> {call.status_color} (computed by backend)</p>
                    <p className="text-slate-400 italic">recording_url, raw_payload, and transcript are excluded from this view for security.</p>
                </div>
            </Section>
        </div>
    );
}

// ─── Recording Player ───────────────────────────────────────────────────────

function RecordingPlayer({ callId }: { callId: number }) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [blobUrl, setBlobUrl] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    // Clean up blob URL on unmount to prevent memory leaks
    useEffect(() => {
        return () => {
            if (blobUrl) URL.revokeObjectURL(blobUrl);
        };
    }, [blobUrl]);

    const loadAndPlay = useCallback(async () => {
        const audio = audioRef.current;
        if (!audio) return;

        setIsLoading(true);
        setHasError(false);

        try {
            // Fetch with auth headers on first play, reuse blob URL after
            let url = blobUrl;
            if (!url) {
                url = await aiCallService.fetchRecordingBlob(callId);
                setBlobUrl(url);
                audio.src = url;
            }
            await audio.play();
        } catch {
            setHasError(true);
            setIsLoading(false);
        }
    }, [callId, blobUrl]);

    const togglePlay = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            loadAndPlay();
        }
    }, [isPlaying, loadAndPlay]);

    const handleTimeUpdate = useCallback(() => {
        const audio = audioRef.current;
        if (audio && audio.duration) {
            setProgress((audio.currentTime / audio.duration) * 100);
        }
    }, []);

    const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const audio = audioRef.current;
        if (!audio || !audio.duration) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        audio.currentTime = pct * audio.duration;
    }, []);

    const formatTime = (s: number) => {
        const m = Math.floor(s / 60);
        const sec = Math.floor(s % 60);
        return `${m}:${sec.toString().padStart(2, '0')}`;
    };

    return (
        <div className="space-y-3">
            <audio
                ref={audioRef}
                preload="none"
                onPlay={() => { setIsPlaying(true); setIsLoading(false); }}
                onPause={() => setIsPlaying(false)}
                onEnded={() => { setIsPlaying(false); setProgress(0); }}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
                onError={() => { setHasError(true); setIsLoading(false); setIsPlaying(false); }}
            />

            <div className="flex items-center gap-3">
                {/* Play/Pause Button */}
                <button
                    id="recording-play-btn"
                    onClick={togglePlay}
                    disabled={hasError}
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-all shadow-sm ${
                        hasError
                            ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                            : isPlaying
                                ? 'bg-red-500 text-white hover:bg-red-600'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                >
                    {isLoading ? (
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : isPlaying ? (
                        <Pause className="h-4 w-4" />
                    ) : (
                        <Play className="h-4 w-4 ml-0.5" />
                    )}
                </button>

                {/* Progress Bar */}
                <div className="flex-1 space-y-1">
                    <div
                        className="h-2 bg-slate-100 rounded-full cursor-pointer overflow-hidden group"
                        onClick={handleSeek}
                    >
                        <div
                            className="h-full bg-blue-500 rounded-full transition-all duration-150 group-hover:bg-blue-600"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400 tabular-nums">
                        <span>{duration > 0 ? formatTime((progress / 100) * duration) : '0:00'}</span>
                        <span>{duration > 0 ? formatTime(duration) : '—'}</span>
                    </div>
                </div>
            </div>

            {hasError && (
                <p className="text-xs text-red-500">
                    Unable to load recording. The recording may have expired or authentication may be required.
                </p>
            )}
        </div>
    );
}

// ─── Helper Components ──────────────────────────────────────────────────────

function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
    return (
        <div className="mb-6 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-md">
            <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-5 py-3">
                <span className="text-slate-500">{icon}</span>
                <h2 className="text-sm font-semibold text-slate-700">{title}</h2>
            </div>
            <div className="p-5">{children}</div>
        </div>
    );
}

function Grid({ children }: { children: React.ReactNode }) {
    return <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">{children}</div>;
}

function Field({ label, value, mono, badge, highlight }: {
    label: string; value: string; mono?: boolean; badge?: boolean; highlight?: boolean;
}) {
    return (
        <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">{label}</p>
            {badge ? (
                <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700 mt-0.5">{value}</span>
            ) : (
                <p className={`text-sm mt-0.5 ${mono ? 'font-mono text-slate-600' : 'text-slate-800'} ${highlight ? 'font-semibold text-orange-600' : ''}`}>{value}</p>
            )}
        </div>
    );
}
