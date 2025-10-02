// vite.config.js
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
var __vite_injected_original_dirname = "/home/project";
var vite_config_default = defineConfig({
  root: ".",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, "index.html"),
        homepage: resolve(__vite_injected_original_dirname, "pages/homepage.html"),
        about: resolve(__vite_injected_original_dirname, "pages/about.html"),
        content: resolve(__vite_injected_original_dirname, "pages/content.html"),
        support: resolve(__vite_injected_original_dirname, "pages/support.html"),
        team: resolve(__vite_injected_original_dirname, "pages/team.html")
      }
    }
  },
  server: {
    port: 3e3,
    open: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcm9vdDogJy4nLFxuICBidWlsZDoge1xuICAgIG91dERpcjogJ2Rpc3QnLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIG1haW46IHJlc29sdmUoX19kaXJuYW1lLCAnaW5kZXguaHRtbCcpLFxuICAgICAgICBob21lcGFnZTogcmVzb2x2ZShfX2Rpcm5hbWUsICdwYWdlcy9ob21lcGFnZS5odG1sJyksXG4gICAgICAgIGFib3V0OiByZXNvbHZlKF9fZGlybmFtZSwgJ3BhZ2VzL2Fib3V0Lmh0bWwnKSxcbiAgICAgICAgY29udGVudDogcmVzb2x2ZShfX2Rpcm5hbWUsICdwYWdlcy9jb250ZW50Lmh0bWwnKSxcbiAgICAgICAgc3VwcG9ydDogcmVzb2x2ZShfX2Rpcm5hbWUsICdwYWdlcy9zdXBwb3J0Lmh0bWwnKSxcbiAgICAgICAgdGVhbTogcmVzb2x2ZShfX2Rpcm5hbWUsICdwYWdlcy90ZWFtLmh0bWwnKSxcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gICAgb3BlbjogdHJ1ZVxuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsU0FBUyxlQUFlO0FBRHhCLElBQU0sbUNBQW1DO0FBR3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxRQUNMLE1BQU0sUUFBUSxrQ0FBVyxZQUFZO0FBQUEsUUFDckMsVUFBVSxRQUFRLGtDQUFXLHFCQUFxQjtBQUFBLFFBQ2xELE9BQU8sUUFBUSxrQ0FBVyxrQkFBa0I7QUFBQSxRQUM1QyxTQUFTLFFBQVEsa0NBQVcsb0JBQW9CO0FBQUEsUUFDaEQsU0FBUyxRQUFRLGtDQUFXLG9CQUFvQjtBQUFBLFFBQ2hELE1BQU0sUUFBUSxrQ0FBVyxpQkFBaUI7QUFBQSxNQUM1QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
