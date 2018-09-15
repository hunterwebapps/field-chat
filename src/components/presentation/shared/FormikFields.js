import * as React from 'react'
import { Field } from 'formik'

export const Textbox = ({ colWidths, label, type, errors, ...rest }) =>
    <div className={colWidths}>
        <div className="form-group">
            {label && <label>{label}</label>}
            {errors &&
                <ErrorBlock
                    error={errors.error}
                    touched={errors.touched}
                    dirty={errors.dirty}
                />
            }
            <Field
                type={type || 'text'}
                className="form-control"
                {...rest}
            />
        </div>
    </div>

export const Checkbox = ({ colWidths, label, type, ...rest }) =>
    <div className={colWidths}>
        <div className="form-group">
            <label>
                <Field
                    type={type || 'checkbox'}
                    {...rest}
                />
                {` ${ label }`}
            </label>
        </div>
    </div>

export const ErrorBlock = ({ error, touched, dirty }) => {
    if (dirty === undefined || dirty)
        if (touched && error)
            return <span className="form-error text-danger"><small>{' ' + error}</small></span>

    return null
}
