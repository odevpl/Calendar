import { Formik, Form, Field } from 'formik';
import './UserEdit.scss';

const UserEdit = () => {
  return (
    <div className="userEditPage">
      <div className="userEdit">
        <h2>User edit</h2>

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
            <Form className="form">

              {/* LOGIN */}
              <div className="formGroup">
                <label>Login</label>
                <Field
                  name="login"
                  type="text"
                  placeholder="Enter login"
                />
              </div>

              {/* TYPE */}
              <div className="formGroup">
                <label>Type</label>
                <Field as="select" name="type">
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                </Field>
              </div>

              {/* ADD FIRST MEETING */}
              <div className="formGroup checkbox">
                <label>
                  <Field type="checkbox" name="addFirstMeeting" />
                  Add first meeting
                </label>
              </div>

              {/* CONDITIONAL FIELDS */}
              {values.addFirstMeeting && (
                <>
                  <div className="inputWithIcon">
                    <Field
                      type="date"
                      name="firstMeetingDate"
                      onClick={(e) => e.target.showPicker()}
                    />
                  </div>

                  <div className="inputWithIcon">
                    <Field
                      type="time"
                      name="firstMeetingTime"
                      onClick={(e) => e.target.showPicker()}
                    />
                  </div>
                </>
              )}

              <div className="actions">
                <button type="submit" className="primaryBtn">
                  Save user
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