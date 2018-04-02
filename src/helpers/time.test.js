import { time } from './time';

describe('time tester', () => {
  it('should return only time if its today', () => {
    const now = new Date();
    expect(time(now)).toEqual(now.toISOString().slice(11,19));
  });

  it('should return only date if its  not today', () => {
    const now = new Date();
    const yesterday = now.getDate() - 1;
    expect(time(yesterday)).toEqual(yesterday.toISOString().slice(0,10));
  });
})