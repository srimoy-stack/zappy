'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePOS } from '@/modules/pos/context/POSContext';
import { Lock, User, Mail, WifiOff, Eye, EyeOff, LogIn } from 'lucide-react';
import '../styles/pos-rush.css';

export const POSLoginPage: React.FC = () => {
    const router = useRouter();
    const { login, deviceId, isOffline } = usePOS();

    // Login type: STORE or CALL_CENTER
    const [loginType, setLoginType] = useState<'STORE' | 'CALL_CENTER'>('STORE');

    // Store POS fields
    const [username, setUsername] = useState('');
    const [pin, setPin] = useState('');

    // Call Center fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Common fields
    const [rememberDevice, setRememberDevice] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Check if device is remembered
    const [isDeviceRemembered, setIsDeviceRemembered] = useState(false);

    useEffect(() => {
        const remembered = localStorage.getItem(`pos_remembered_${deviceId}`);
        if (remembered) {
            setIsDeviceRemembered(true);
            const data = JSON.parse(remembered);
            if (data.type === 'STORE') {
                setLoginType('STORE');
                setUsername(data.username || '');
            } else {
                setLoginType('CALL_CENTER');
                setEmail(data.email || '');
            }
        }
    }, [deviceId]);

    const handlePinInput = (digit: string) => {
        if (pin.length < 6) {
            setPin(prev => prev + digit);
        }
    };

    const handlePinDelete = () => {
        setPin(prev => prev.slice(0, -1));
    };

    const handlePinClear = () => {
        setPin('');
    };

    const handleLogin = async () => {
        setError('');
        setLoading(true);

        try {
            if (loginType === 'STORE') {
                if (!pin || pin.length < 4) {
                    throw new Error('Enter valid PIN');
                }
                await login('STORE', { pin, deviceId });

                if (rememberDevice) {
                    localStorage.setItem(`pos_remembered_${deviceId}`, JSON.stringify({
                        type: 'STORE',
                        username: username
                    }));
                }
            } else {
                if (!email || !password) {
                    throw new Error('Email and password required');
                }
                await login('CALL_CENTER', { email, password, deviceId });

                if (rememberDevice) {
                    localStorage.setItem(`pos_remembered_${deviceId}`, JSON.stringify({
                        type: 'CALL_CENTER',
                        email: email
                    }));
                }
            }
            router.push('/pos/dashboard');
        } catch (err: any) {
            setError(err.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };

    const isFormValid = loginType === 'STORE'
        ? pin.length >= 4
        : email.length > 0 && password.length > 0;

    return (
        <div className="pos-screen" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '20px'
        }}>
            <div style={{
                width: '100%',
                maxWidth: loginType === 'STORE' ? '480px' : '520px',
                background: 'var(--pos-bg-surface)',
                borderRadius: '16px',
                border: '1px solid var(--pos-border-subtle)',
                overflow: 'hidden'
            }}>
                {/* Header */}
                <div style={{
                    padding: '32px 32px 24px',
                    textAlign: 'center',
                    borderBottom: '1px solid var(--pos-border-subtle)'
                }}>
                    <div style={{
                        width: '72px',
                        height: '72px',
                        background: 'var(--pos-action-primary)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                    }}>
                        <Lock size={36} color="white" strokeWidth={2.5} />
                    </div>
                    <h1 style={{
                        fontSize: '28px',
                        fontWeight: 800,
                        color: 'var(--pos-text-primary)',
                        marginBottom: '8px',
                        letterSpacing: '-0.02em'
                    }}>
                        POS Login
                    </h1>
                    <p style={{
                        fontSize: '13px',
                        color: 'var(--pos-text-muted)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Device: {deviceId}
                    </p>

                    {/* Offline Indicator - Only for Store POS */}
                    {isOffline && loginType === 'STORE' && (
                        <div style={{
                            marginTop: '16px',
                            padding: '12px 16px',
                            background: 'rgba(245, 158, 11, 0.1)',
                            border: '1px solid var(--pos-state-warning)',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px'
                        }}>
                            <WifiOff size={16} color="var(--pos-state-warning)" />
                            <span style={{
                                fontSize: '12px',
                                fontWeight: 700,
                                color: 'var(--pos-state-warning)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                Offline Mode
                            </span>
                        </div>
                    )}
                </div>

                {/* Login Type Toggle */}
                <div style={{
                    padding: '24px 32px 0',
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '8px',
                        background: 'var(--pos-bg-main)',
                        padding: '4px',
                        borderRadius: '10px',
                        marginBottom: '24px'
                    }}>
                        <button
                            onClick={() => setLoginType('STORE')}
                            style={{
                                padding: '14px',
                                borderRadius: '8px',
                                border: 'none',
                                background: loginType === 'STORE' ? 'var(--pos-action-primary)' : 'transparent',
                                color: loginType === 'STORE' ? 'white' : 'var(--pos-text-secondary)',
                                fontSize: '14px',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            Store POS
                        </button>
                        <button
                            onClick={() => setLoginType('CALL_CENTER')}
                            style={{
                                padding: '14px',
                                borderRadius: '8px',
                                border: 'none',
                                background: loginType === 'CALL_CENTER' ? 'var(--pos-action-primary)' : 'transparent',
                                color: loginType === 'CALL_CENTER' ? 'white' : 'var(--pos-text-secondary)',
                                fontSize: '14px',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            Call Center
                        </button>
                    </div>
                </div>

                {/* Form Content */}
                <div style={{ padding: '0 32px 32px' }}>
                    {/* STORE POS - PIN Entry */}
                    {loginType === 'STORE' && (
                        <div>
                            {/* Username (optional if device remembered) */}
                            {!isDeviceRemembered && (
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{
                                        display: 'block',
                                        fontSize: '12px',
                                        fontWeight: 700,
                                        color: 'var(--pos-text-secondary)',
                                        marginBottom: '8px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        Username (Optional)
                                    </label>
                                    <div style={{ position: 'relative' }}>
                                        <User size={20} style={{
                                            position: 'absolute',
                                            left: '16px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            color: 'var(--pos-text-muted)'
                                        }} />
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Staff name"
                                            className="pos-input"
                                            style={{ paddingLeft: '48px' }}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* PIN Display */}
                            <div style={{
                                background: 'var(--pos-bg-main)',
                                borderRadius: '12px',
                                padding: '24px',
                                marginBottom: '20px',
                                textAlign: 'center',
                                border: '1px solid var(--pos-border-subtle)'
                            }}>
                                <div style={{
                                    fontSize: '11px',
                                    color: 'var(--pos-text-muted)',
                                    marginBottom: '12px',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em'
                                }}>
                                    Enter PIN
                                </div>
                                <div style={{
                                    fontSize: '42px',
                                    fontWeight: 800,
                                    color: 'var(--pos-text-primary)',
                                    letterSpacing: '16px',
                                    fontFamily: 'monospace',
                                    minHeight: '50px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {pin.split('').map(() => '●').join('')}
                                    {Array(Math.max(0, 4 - pin.length)).fill('_').join('')}
                                </div>
                            </div>

                            {/* Numpad */}
                            <div className="pos-numpad" style={{ marginBottom: '20px' }}>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, '⌫'].map((num, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            if (num === '⌫') handlePinDelete();
                                            else if (num === 'C') handlePinClear();
                                            else handlePinInput(num.toString());
                                        }}
                                        className="pos-numpad-btn"
                                        style={{
                                            background: num === 'C' ? 'var(--pos-state-error)' : 'var(--pos-bg-card)',
                                            color: num === 'C' ? 'white' : 'var(--pos-text-primary)',
                                            height: '64px'
                                        }}
                                    >
                                        {num}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CALL CENTER - Email/Password */}
                    {loginType === 'CALL_CENTER' && (
                        <div>
                            {/* Email */}
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{
                                    display: 'block',
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    color: 'var(--pos-text-secondary)',
                                    marginBottom: '8px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    Email Address
                                </label>
                                <div style={{ position: 'relative' }}>
                                    <Mail size={20} style={{
                                        position: 'absolute',
                                        left: '16px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: 'var(--pos-text-muted)'
                                    }} />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="agent@company.com"
                                        className="pos-input"
                                        style={{ paddingLeft: '48px', height: '56px' }}
                                        autoComplete="email"
                                        disabled={isDeviceRemembered}
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{
                                    display: 'block',
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    color: 'var(--pos-text-secondary)',
                                    marginBottom: '8px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    Password
                                </label>
                                <div style={{ position: 'relative' }}>
                                    <Lock size={20} style={{
                                        position: 'absolute',
                                        left: '16px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: 'var(--pos-text-muted)'
                                    }} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="••••••••"
                                        className="pos-input"
                                        style={{ paddingLeft: '48px', paddingRight: '48px', height: '56px' }}
                                        autoComplete="current-password"
                                    />
                                    <button
                                        onClick={() => setShowPassword(!showPassword)}
                                        style={{
                                            position: 'absolute',
                                            right: '12px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            color: 'var(--pos-text-muted)',
                                            padding: '8px',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Remember Device Checkbox */}
                    <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '24px',
                        cursor: 'pointer',
                        padding: '14px 16px',
                        background: 'var(--pos-bg-main)',
                        borderRadius: '8px',
                        border: '1px solid var(--pos-border-subtle)',
                        transition: 'all 0.2s'
                    }}>
                        <input
                            type="checkbox"
                            checked={rememberDevice}
                            onChange={(e) => setRememberDevice(e.target.checked)}
                            style={{
                                width: '20px',
                                height: '20px',
                                cursor: 'pointer',
                                accentColor: 'var(--pos-action-primary)'
                            }}
                        />
                        <span style={{
                            fontSize: '14px',
                            fontWeight: 600,
                            color: 'var(--pos-text-primary)'
                        }}>
                            Remember this device
                        </span>
                    </label>

                    {/* Error Message */}
                    {error && (
                        <div style={{
                            padding: '14px 16px',
                            background: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid var(--pos-state-error)',
                            borderRadius: '8px',
                            color: 'var(--pos-state-error)',
                            fontSize: '13px',
                            fontWeight: 600,
                            marginBottom: '20px',
                            textAlign: 'center'
                        }}>
                            {error}
                        </div>
                    )}

                    {/* Login Button */}
                    <button
                        onClick={handleLogin}
                        disabled={loading || !isFormValid}
                        className="pos-btn pos-btn-primary"
                        style={{
                            width: '100%',
                            height: '64px',
                            fontSize: '16px',
                            marginBottom: '20px'
                        }}
                    >
                        {loading ? (
                            'Logging in...'
                        ) : (
                            <>
                                <LogIn size={20} />
                                Login to POS
                            </>
                        )}
                    </button>

                    {/* Demo Credentials */}
                    <div style={{
                        padding: '16px',
                        background: 'var(--pos-bg-main)',
                        borderRadius: '8px',
                        fontSize: '11px',
                        color: 'var(--pos-text-muted)',
                        lineHeight: 1.6,
                        border: '1px solid var(--pos-border-subtle)'
                    }}>
                        <div style={{
                            fontWeight: 700,
                            marginBottom: '8px',
                            color: 'var(--pos-text-secondary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            Demo Credentials
                        </div>
                        <div style={{ marginBottom: '4px' }}>
                            <strong style={{ color: 'var(--pos-text-primary)' }}>Store PIN:</strong> 1234 or 5678
                        </div>
                        <div>
                            <strong style={{ color: 'var(--pos-text-primary)' }}>Call Center:</strong> alex@zyappy.com / password123
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default POSLoginPage;
