import * as yup from 'yup';

export const assignmentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  due_date: yup.date().nullable(),
  teacher_id: yup.string().nullable(),
  student_id: yup.string().nullable(),
});
