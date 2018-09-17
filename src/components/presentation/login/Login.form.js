import React from 'react'
import { func } from 'prop-types'
import { withFormik, Form } from 'formik'
import * as Yup from 'yup'

import { Textbox, Checkbox } from '../shared/FormikFields'

LoginForm.displayName = 'Login Form'

LoginForm.propTypes = {
    login: func.isRequired,
    showRegister: func
}

function LoginForm ({
    showRegister,

    errors,
    touched,
    dirty,
    isValid,
    isSubmitting
}) {
    return (
        <Form>
            <Textbox
                name="username"
                label="Username"
                errors={{
                    error: errors.username,
                    touched: touched.username,
                    dirty
                }}
            />
            <Textbox
                name="password"
                type="password"
                label="Password"
                errors={{
                    error: errors.password,
                    touched: touched.password,
                    dirty
                }}
            />
            <Checkbox name="rememberMe" label="Remember Me" />

            <button
                type="submit"
                className="btn btn-default"
                disabled={isSubmitting || !isValid}
            >
                {'Login'}
            </button>

            {showRegister &&
                <button
                    onClick={showRegister}
                    type="button"
                    className="btn btn-default"
                >
                    {'Register'}
                </button>
            }
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: () => ({
        username: '',
        password: '',
        rememberMe: false
    }),
    isInitialValid: true,
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required')
    }),
    handleSubmit: (values, bag) =>
        bag.props.login({
            username: values.username,
            password: values.password,
            rememberMe: values.rememberMe
        }, bag)
})(LoginForm)
