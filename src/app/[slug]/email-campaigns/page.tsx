'use client';
import { useParams } from 'next/navigation';
import { redirect } from 'next/navigation';
export default function Page() {
    const params = useParams();
    const slug = params?.slug as string;
    redirect(`/${slug}/email-campaigns/dashboard`);
}
