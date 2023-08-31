import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
export default authMiddleware({
  publicRoutes: ["/api/uploadthing"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
