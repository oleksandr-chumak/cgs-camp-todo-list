import * as Yup from 'yup';

export const todoSchema = Yup.object({
  title: Yup.string()
    .required('Title should be')
    .min(3, 'Tittle should be longer than 3')
    .max(50, 'Title should be shorter than 50'),
  content: Yup.string()
    .required('Title should be')
    .min(3, 'Content should be longer than 3')
    .max(250, 'Content should be shorter than 250')
});
