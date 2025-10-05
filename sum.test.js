import {describe, expect, test} from '@jest/globals';
import sum from './index.js';

test('maintest', () => { 
    expect(sum(1,2)).toBe(3)
    expect(sum(5,9)).toBe(15)
})