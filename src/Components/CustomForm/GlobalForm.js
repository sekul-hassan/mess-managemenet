import React from 'react';
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

function GlobalForm({ formData, onSubmit }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {formData && formData.map((item, index) => (
                item.type !== "select" ? (
                    <Form.Group className="mb-3" key={index}>
                        <Form.Label>{item.level}</Form.Label>
                        <Form.Control
                            type={item.type}
                            placeholder={item.placeholder}
                            {...register(item.name, {
                                required: { value: item.required, message: `This field is required` } // Custom error message
                            })}
                        />
                        {errors[item.name] && <p className="text-danger">{errors[item.name].message}</p>}
                    </Form.Group>
                ) : (
                    <Form.Group className="mb-3" key={index}>
                        <Form.Label>{item.level}</Form.Label>
                        <Form.Select {...register(item.name, {
                            required: { value: true, message: `${item.level} is required` } // Custom error message
                        })}>
                            <option value="">Select...</option> {/* Default option */}
                            {item.options.map((option, optionIndex) => (
                                <option key={optionIndex} value={option.value}>{option.label}</option>
                            ))}
                        </Form.Select>
                        {errors[item.name] && <p className="text-danger">{errors[item.name].message}</p>}
                    </Form.Group>
                )
            ))}
            <Button type="submit">Submit</Button>
        </Form>
    );
}

export default GlobalForm;
