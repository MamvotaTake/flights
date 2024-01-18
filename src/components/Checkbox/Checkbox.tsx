import './Checkbox.scss';

import clsx from 'clsx'
import { useEffect, useMemo, useState } from 'react'


export interface CheckboxProps {
    checked?: boolean | 'indeterminate'
    defaultChecked?: boolean
    onChange?: (value: boolean) => void
    label?: string | JSX.Element
    id?: string
    className?: string
    fullWidth?: boolean
    size?: 'small' | 'medium'
    bordered?: boolean
    color?: string
}

export interface BoxCSSProperties extends React.CSSProperties {
    '--box-color': string
}

let checkboxCounter = 0


export function Checkbox({checked, defaultChecked, onChange, color,

                                  label,
                                  id: rawId,
                                  className,
                                  fullWidth,
                                  bordered,
                                  size,
                              }: CheckboxProps): JSX.Element {
    const indeterminate = checked === 'indeterminate'

    const id = useMemo(() => rawId || `checkbox-${checkboxCounter++}`, [rawId])
    const [localChecked, setLocalChecked] = useState(indeterminate || (checked ?? defaultChecked ?? false))
    const [wasIndeterminateLast, setWasIndeterminateLast] = useState(false)

    useEffect(() => {
        if (checked !== undefined) {
            setLocalChecked(!!checked)
        }
    }, [checked])

    useEffect(() => {
        if (checked) {
            setWasIndeterminateLast(indeterminate)
        }
    }, [checked, indeterminate])

    return (
        <div >
            <span
                className={clsx(
                    'Checkbox',
                    localChecked && 'Checkbox--checked',
                    wasIndeterminateLast && 'Checkbox--indeterminate',
                    bordered && 'Checkbox--bordered',
                    fullWidth && 'Checkbox--full-width',
                    size && `Checkbox--${size}`,
                    className
                )}
            >
                <input
                    className="Checkbox__input"
                    type="checkbox"
                    checked={localChecked}
                    defaultChecked={defaultChecked}
                    onChange={(e) => {
                        checked === undefined && setLocalChecked(e.target.checked)
                        onChange?.(e.target.checked)
                    }}
                    id={id}

                />
                {/* eslint-disable-next-line react/forbid-dom-props */}
                <label htmlFor={id} style={color ? ({ '--box-color': color } as BoxCSSProperties) : {}}>
                    <svg
                        className="Checkbox__box"
                        fill="none"
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d={!wasIndeterminateLast ? 'm3.5 8 3 3 6-6' : 'm3.5 8h9'} strokeWidth="2" />
                    </svg>
                    {label && <span className="Checkbox__label">{label}</span>}
                </label>
            </span>
        </div>
    )
}