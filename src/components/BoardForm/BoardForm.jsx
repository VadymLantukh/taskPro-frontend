import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Images from '../../images/Image.js';
import s from './BoardForm.module.css';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import t from '../../styles/Forms.module.css';

const BoardForm = ({
  initialTitle = '',
  initialSelectedIcon = 'icon_1',
  initialSelectedBackground = 'iconBackground',
  formTitle = 'New board',
  buttonText = 'Create',
  onSubmit,
}) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().trim().required('Title is required'),
  });

  const initialValues = {
    title: initialTitle,
    selectedIcon: initialSelectedIcon,
    selectedBackground: initialSelectedBackground,
  };

  return (
    <div className={s.boardContainer}>
      <h3 className={s.formTitle}>{formTitle}</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (onSubmit) {
            onSubmit(values);
          }
          setSubmitting(false);
        }}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form className={s.form}>
            <Field
              type="text"
              name="title"
              placeholder="Title"
              className={t.input}
            />
            <ErrorMessage name="title" component="span" className={s.error} />

            <h3 className={s.iconText}>Icons</h3>
            <div className={s.iconsContainer}>
              {Array.from({ length: 8 }, (_, index) => {
                const iconName = `icon_${index + 1}`;
                return (
                  <label key={iconName} className={s.iconLabel}>
                    <Field
                      type="radio"
                      name="selectedIcon"
                      value={iconName}
                      checked={values.selectedIcon === iconName}
                      onChange={() => setFieldValue('selectedIcon', iconName)}
                      className={s.radioInput}
                    />
                    <Icon name={iconName} className={s.icon} />
                  </label>
                );
              })}
            </div>

            <h3 className={s.backgroundText}>Background</h3>
            <div className={s.backgroundsContainer}>
              {Array.from({ length: 16 }, (_, index) => {
                const isIcon = index === 0;
                const bgName = isIcon ? 'iconBackground' : `bgImage_${index}`;
                const bgPreview = isIcon
                  ? null
                  : Images[`bgImage_${index}`]?.preview?.[
                      `bg_${index}_preview`
                    ];

                return (
                  <label
                    key={bgName}
                    className={`${s.backgroundLabel} ${
                      values.selectedBackground === bgName ? s.selected : ''
                    }`}
                  >
                    <Field
                      type="radio"
                      name="selectedBackground"
                      value={bgName}
                      checked={values.selectedBackground === bgName}
                      onChange={() =>
                        setFieldValue('selectedBackground', bgName)
                      }
                      className={s.radioInput}
                    />
                    {isIcon ? (
                      <Icon name="icon-bg" className={s.backgroundIcon} />
                    ) : (
                      <img
                        src={bgPreview}
                        alt={`Background ${index}`}
                        className={s.backgroundImage}
                      />
                    )}
                  </label>
                );
              })}
            </div>

            <Button text={buttonText} showIcon={true} disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BoardForm;
