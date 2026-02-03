import { Formik, Form, Field } from 'formik';
import { updateUser } from '../../../components/utils/api/users';
import './UserEditModal.scss';

export const UserEditModal = ({ user, onClose, onSaved }) => {
  return (
    <div className="modalBackdrop">
      <div className="modal">
        <h2>Edycja użytkownika</h2>

        <Formik
          initialValues={{
            login: user.login,
            type: user.type,
          }}
          onSubmit={async (values) => {
            await updateUser(user.id, values);
            onSaved();
            onClose();
          }}
        >
          <Form>
            <div className="formGroup">
              <label>Login</label>
              <Field name="login" />
            </div>

            <div className="formGroup">
              <label>Type</label>
              <Field as="select" name="type">
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
              </Field>
            </div>

            <div className="actions">
              <button type="submit" className="primaryBtn">
                Zapisz
              </button>
              <button
                type="button"
                className="secondaryBtn"
                onClick={onClose}
              >
                Anuluj
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default UserEditModal;