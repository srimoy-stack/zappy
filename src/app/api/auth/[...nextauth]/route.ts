import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // Mock authentication - in production, verify with your API
                if (credentials?.email === "admin@zyappy.com" && credentials?.password === "password") {
                    return {
                        id: "user-1",
                        name: "John Doe",
                        email: "admin@zyappy.com",
                        role: "ADMIN",
                        tenantId: "tenant-demo",
                        storeIds: ["store-01", "store-02"]
                    } as any;
                }
                return null;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.role = user.role;
                token.tenantId = user.tenantId;
                token.storeIds = user.storeIds;
            }
            return token;
        },
        async session({ session, token }: any) {
            if (session.user) {
                session.user.role = token.role;
                session.user.tenantId = token.tenantId;
                session.user.storeIds = token.storeIds;
            }
            return session;
        }
    },
    pages: {
        signIn: '/login',
    },
    session: {
        strategy: "jwt"
    }
});

export { handler as GET, handler as POST };
