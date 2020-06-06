import ErrorRepository from '../classes/ErrorRepository';

test('code error', () => {
  const testErr = new Error('This page deleted');
  testErr.name = '404';
  const errorArr = new ErrorRepository(testErr);
  expect(errorArr.translate(testErr.name)).toEqual('This page deleted');
});

test('Unknown error', () => {
  const testErr = new Error('This page deleted');
  testErr.name = '403';
  const errorArr = new ErrorRepository(testErr);
  expect(errorArr.translate('402')).toEqual('Unknown error');
});
