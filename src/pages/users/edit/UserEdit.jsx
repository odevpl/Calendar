import { Formik, Form, Field } from 'formik';
import './UserEdit.scss';

const UserEdit = ({ translate }) => {
  return (
    <div className='userEditPage'>
      <div className='userEdit'>
        <h2>{translate.usersEdit.title}</h2>

        <Formik
          initialValues={{
            login: '',
            type: 'type1',
            addFirstMeeting: false,
            firstMeetingDate: '',
            firstMeetingTime: '',
          }}
          onSubmit={(values) => {
            console.log('FORM VALUES:', values);
          }}
        >
          {({ values }) => (
            <Form className='form'>
              {/* LOGIN */}
              <div className='formGroup'>
                <label>{translate.usersEdit.lableOne}</label>
                <Field
                  name='login'
                  type='text'
                  placeholder={translate.usersEdit.placeholderOne}
                />
              </div>

              {/* TYPE */}
              <div className='formGroup'>
                <label>{translate.usersEdit.lableTwo}</label>
                <Field as='select' name='type'>
                  <option value='type1'>{translate.usersEdit.optionOne}</option>
                  <option value='type2'>{translate.usersEdit.optionTwo}</option>
                </Field>
              </div>

              {/* ADD FIRST MEETING */}
              <div className='formGroup checkbox'>
                <label>
                  <Field type='checkbox' name='addFirstMeeting' />
                  {translate.usersEdit.lableThree}
                </label>
              </div>

              {/* CONDITIONAL FIELDS */}
              {values.addFirstMeeting && (
                <>
                  <div className='inputWithIcon'>
                    <Field
                      type='date'
                      name='firstMeetingDate'
                      onClick={(e) => e.target.showPicker()}
                    />
                  </div>

                  <div className='inputWithIcon'>
                    <Field
                      type='time'
                      name='firstMeetingTime'
                      onClick={(e) => e.target.showPicker()}
                    />
                  </div>
                </>
              )}

              <div className='actions'>
                <button type='submit' className='primaryBtn'>
                  {translate.usersEdit.btn}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserEdit;
