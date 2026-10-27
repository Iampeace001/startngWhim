import { test } from 'node:test';
import assert from 'node:assert/strict';
import { games } from './games.ts';

test('the full catalogue has unique slugs and includes the park exactly once', () => {
  assert.equal(new Set(games.map(game => game.slug)).size, games.length);
  assert.equal(games.filter(game => game.slug === 'hangout').length, 1);
});

