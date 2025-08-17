import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.ts', 'sdk-tests/**/*.spec.ts'],
    testTimeout: 60000,
    globals: true,
  },
});
