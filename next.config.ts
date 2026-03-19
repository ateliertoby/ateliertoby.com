import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TODO: Enable redirects after ateliertoby.com SSL is provisioned
  // async redirects() {
  //   return [
  //     {
  //       source: "/:path*",
  //       has: [{ type: "host", value: "toby.courses" }],
  //       destination: "https://ateliertoby.com/:path*",
  //       permanent: true,
  //     },
  //     {
  //       source: "/:path*",
  //       has: [{ type: "host", value: "www.toby.courses" }],
  //       destination: "https://ateliertoby.com/:path*",
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
