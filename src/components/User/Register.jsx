import React, { Component } from "react";
import { Formik } from "formik";
import { withRouter } from "react-router-dom";

class Register extends Component {
    render() {
        return (
            <div>
                <h1>Halaman Daftar</h1>
                <div style={{ textAlign: "center" }}>
                    <Formik
                        initialValues={{
                            fullname: "",
                            username: "",
                            email: "ervanbot@gmail.com",
                            password: "",
                            avatar: "",
                        }}
                        validate={(values) => {
                            const errors = {};
                            if (values.email === "") {
                                errors.email = "Required";
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                    values.email
                                )
                            ) {
                                errors.email = "Invalid email address";
                            } else if (values.password.length < 8) {
                                errors.password =
                                    "Minimum password 8 character";
                            }
                            return errors;
                        }}
                        onSubmit={(values) => {
                            const url =
                                "https://5e8ec152e0e7de001685f98a.mockapi.io/coba";
                            const options = {
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(values),
                                method: "POST",
                            };

                            fetch(url, options)
                                .then((response) => {
                                    return response.json();
                                })
                                .then((result) => {
                                    alert("register successfully");
                                    this.props.history.push("/signin");
                                });
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => {
                            return (
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input
                                            type="text"
                                            name="fullname"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.fullname}
                                            placeholder="fullname"
                                        />
                                        <span
                                            style={{
                                                color: "red",
                                                fontStyle: "italic",
                                            }}
                                        >
                                            {errors.fullname &&
                                                touched.fullname &&
                                                errors.fullname}
                                        </span>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="username"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.username}
                                            placeholder="username"
                                        />
                                        <span
                                            style={{
                                                color: "red",
                                                fontStyle: "italic",
                                            }}
                                        >
                                            {errors.username &&
                                                touched.username &&
                                                errors.username}
                                        </span>
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            placeholder="email"
                                        />
                                        <span
                                            style={{
                                                color: "red",
                                                fontStyle: "italic",
                                            }}
                                        >
                                            {errors.email &&
                                                touched.email &&
                                                errors.email}
                                        </span>
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            placeholder="password"
                                        />
                                        <span
                                            style={{
                                                color: "red",
                                                fontStyle: "italic",
                                            }}
                                        >
                                            {errors.password &&
                                                touched.password &&
                                                errors.password}
                                        </span>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="avatar"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.avatar}
                                            placeholder="avatar"
                                        />
                                        <span
                                            style={{
                                                color: "red",
                                                fontStyle: "italic",
                                            }}
                                        >
                                            {errors.avatar &&
                                                touched.avatar &&
                                                errors.avatar}
                                        </span>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Submit
                                    </button>
                                </form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        );
    }
}

export default withRouter(Register);