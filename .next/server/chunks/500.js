"use strict";
exports.id = 500;
exports.ids = [500];
exports.modules = {

/***/ 885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dict": () => (/* binding */ dict)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const dict = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12"
};
const Month = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Month);


/***/ }),

/***/ 743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BACKGROUND_COLOR": () => (/* binding */ BACKGROUND_COLOR),
/* harmony export */   "TEXT_COLOR": () => (/* binding */ TEXT_COLOR),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const TEXT_COLOR = [
    "white",
    "red",
    "black",
    "blue",
    "blueviolet",
    "brown",
    "green"
];
const BACKGROUND_COLOR = [
    "blue",
    "red",
    "white",
    "black",
    "pink",
    "blue",
    "beige",
    "blueviolet",
    "brown",
    "darkblue",
    "gold",
    "lawngreen",
    "green"
];
const Params = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Params);


/***/ }),

/***/ 500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ todo_list_page)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./server/api.js

function post(endpoint, data) {
    if (!data) data = new FormData();
    return external_axios_default().post(endpoint, data);
}
class WebApiClient {
    getAllTodos(searchText, filter) {
        const data = new FormData();
        if (searchText) data.append("search_text", searchText);
        if (filter) data.append("filter_result", filter);
        return post("/api/get_all_todos", data);
    }
    getTimeLeft() {
        const data = new FormData();
        return post("/api/get_time_left", data);
    }
    addTodo(label, description, textColor, backColor, date, time) {
        const data = new FormData();
        data.append("label", label);
        data.append("description", description);
        data.append("text_color", textColor);
        data.append("background_color", backColor);
        if (date) data.append("date", date);
        if (time) data.append("time", time);
        return post("/api/add_new_todo", data);
    }
    getTodo(todoID) {
        const data = new FormData();
        data.append("todo_id", todoID);
        return post("/api/get_todo", data);
    }
    updateTodo(todoID, label, description, textColor, backColor, date, time) {
        const data = new FormData();
        data.append("todo_id", todoID);
        data.append("label", label);
        data.append("description", description);
        data.append("text_color", textColor);
        data.append("background_color", backColor);
        if (date) data.append("date", date);
        if (time) data.append("time", time);
        return post("/api/update_todo", data);
    }
    deleteTodo(todoID) {
        const data = new FormData();
        data.append("todo_id", todoID);
        return post("/api/delete_todo", data);
    }
}
/* harmony default export */ const api = (WebApiClient);

;// CONCATENATED MODULE: ./server/get.js


let apiClient = null;
function getApiClient() {
    if (apiClient == null) {
        apiClient = new api();
    }
    return apiClient;
}
const Get = ()=>{
    return /*#__PURE__*/ _jsx(_Fragment, {});
};
/* harmony default export */ const get = ((/* unused pure expression or super */ null && (Get)));

// EXTERNAL MODULE: ./pages/params.js
var params = __webpack_require__(743);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(937);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__(306);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: ./pages/month.js
var pages_month = __webpack_require__(885);
;// CONCATENATED MODULE: ./components/todo_modal.js







const TodoModal = (props)=>{
    const { 0: label , 1: setLabel  } = (0,external_react_.useState)("");
    const { 0: description , 1: setDescription  } = (0,external_react_.useState)("");
    const { 0: textColor , 1: setTextColor  } = (0,external_react_.useState)(params.TEXT_COLOR[0]);
    const { 0: BackColor , 1: setBackColor  } = (0,external_react_.useState)(params.BACKGROUND_COLOR[0]);
    const { 0: error , 1: setError  } = (0,external_react_.useState)("");
    const { 0: withDeadline , 1: setWithDeadline  } = (0,external_react_.useState)(false);
    const { 0: date , 1: setDate  } = (0,external_react_.useState)("");
    const { 0: time , 1: setTime  } = (0,external_react_.useState)("");
    const { type , show , setShow , todoID  } = props;
    (0,external_react_.useEffect)(()=>{
        if (todoID !== undefined) {
            getApiClient().getTodo(todoID).then((response)=>{
                if (response.data.success) {
                    setLabel(response.data.todo.label);
                    setDescription(response.data.todo.description);
                    setTextColor(response.data.todo.text_color);
                    setBackColor(response.data.todo.background_color);
                    if (response.data.todo.deadline !== null) {
                        const deadline = response.data.todo.deadline;
                        const time = "";
                        const day = "";
                        const year = "";
                        const month = "";
                        for(var i = 5; i < deadline.length - 3; i++){
                            if (i <= 6) day += deadline[i];
                            else if (i >= 8 && i <= 10) month += deadline[i];
                            else if (i >= 12 && i <= 15) year += deadline[i];
                            else if (i >= 16) time += deadline[i];
                        }
                        const date = year + "-" + pages_month.dict[month] + "-" + day;
                        setDate(date);
                        setTime(time.trim());
                        setWithDeadline(true);
                    }
                } else {
                    setError("Something Went Wrong!");
                }
            }).catch((error)=>{
                setError("Something Went Wrong!");
            });
        }
    }, []);
    const submit = ()=>{
        if (type === "add") {
            if (label === "") {
                setError("Label must not be empty!");
            } else if (withDeadline && (date === "" || time === "")) {
                setError("Date and Time must not be empty!");
            } else {
                getApiClient().addTodo(label, description, textColor, BackColor, date, time).then((response)=>{
                    if (response.data.success) {
                        setShow(false);
                        setError("");
                    } else setError("Something Went Wrong!");
                }).catch((error)=>{
                    setError("Something Went Wrong!");
                });
            }
        } else {
            if (label === "") {
                setError("Label must not be empty!");
            } else if (withDeadline && (date === "" || time === "")) {
                setError("Date and Time must not be empty!");
            } else {
                getApiClient().updateTodo(todoID, label, description, textColor, BackColor, date, time).then((response)=>{
                    if (response.data.success) {
                        setShow(false);
                        setError("");
                    } else setError("Something Went Wrong!");
                }).catch((error)=>{
                    setError("Something Went Wrong!");
                });
            }
        }
    };
    const checkIfWithDeadline = (e)=>{
        setWithDeadline(e.target.checked);
        setDate("");
        setTime("");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()), {
        show: show,
        backdrop: "static",
        keyboard: false,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Header, {
                closeButton: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Title, {
                    children: type === "add" ? "Add New Todo" : "Edit Todo"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()).Body, {
                children: [
                    error !== "" ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "error",
                        children: error
                    }) : "",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "label",
                                        children: "Label"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        className: "form-control",
                                        value: label,
                                        id: "label",
                                        placeholder: "Enter label",
                                        onChange: (e)=>setLabel(e.target.value)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "desc",
                                        children: "Description"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                        className: "form-control",
                                        value: description,
                                        id: "desc",
                                        rows: "3",
                                        onChange: (e)=>setDescription(e.target.value)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-check",
                                children: [
                                    withDeadline ? /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "checkbox",
                                        className: "form-check-input",
                                        id: "deadline",
                                        onChange: checkIfWithDeadline,
                                        checked: true
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "checkbox",
                                        className: "form-check-input",
                                        id: "deadline",
                                        onChange: checkIfWithDeadline
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: "form-check-label",
                                        htmlFor: "deadline",
                                        id: "deadline-text",
                                        children: "With Deadline"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    withDeadline ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "date",
                                                className: "form-check-input",
                                                id: "date",
                                                onChange: (e)=>setDate(e.target.value),
                                                value: date
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "time",
                                                className: "form-check-input",
                                                id: "time",
                                                step: "1",
                                                onChange: (e)=>setTime(e.target.value),
                                                value: time
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                        ]
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "tcolor",
                                        children: "Text Color"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                        className: "form-control",
                                        value: textColor,
                                        id: "tcolor",
                                        onChange: (e)=>setTextColor(e.target.value),
                                        children: params.TEXT_COLOR.map((color, index)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                children: color
                                            }, index);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "bcolor",
                                        children: "Background Color"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                        className: "form-control",
                                        value: BackColor,
                                        id: "tcolor",
                                        onChange: (e)=>setBackColor(e.target.value),
                                        children: params.BACKGROUND_COLOR.map((color, index)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                children: color
                                            }, index);
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()).Footer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "danger",
                        onClick: ()=>{
                            setShow(false);
                            setError("");
                        },
                        children: "Cancel"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        id: "modal-btn",
                        className: "btn btn-success",
                        onClick: submit,
                        children: type === "add" ? "Add" : "Edit"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const todo_modal = (TodoModal);

;// CONCATENATED MODULE: ./components/todo_card.js




const TodoCard = (props)=>{
    const { 0: todoID , 1: setTodoID  } = (0,external_react_.useState)(-1);
    const { 0: error , 1: setError  } = (0,external_react_.useState)("");
    const { show , setShow , todos , timeLeft , setIsDeleted  } = props;
    const deleteTodo = (0,external_react_.useCallback)((e)=>{
        const todoID = e.target.id;
        getApiClient().deleteTodo(todoID).then((response)=>{
            if (response.data.success) {
                setIsDeleted(true);
                setError("");
            } else {
                setError("Something Went Wrong!");
            }
        }).catch((error)=>{
            setError("Something Went Wrong!");
        });
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card-container",
                children: [
                    error !== "" ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "error",
                        children: error
                    }) : "",
                    todos && todos.map((todo, index)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card-flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "card",
                                    style: {
                                        color: todo.text_color,
                                        backgroundColor: todo.background_color
                                    },
                                    onClick: ()=>{
                                        setShow(true);
                                        setTodoID(todo.id);
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "card-label-flex",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: todo.label
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(DisplayTimeLeft, {
                                                timeLeft: timeLeft,
                                                todo: todo,
                                                index: index
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa fa-trash-o",
                                    id: todo.id,
                                    onClick: deleteTodo
                                })
                            ]
                        }, todo.id);
                    })
                ]
            }),
            show ? /*#__PURE__*/ jsx_runtime_.jsx(todo_modal, {
                type: "edit",
                show: show,
                setShow: setShow,
                todoID: todoID
            }) : ""
        ]
    });
};
const DisplayTimeLeft = ({ timeLeft , todo , index  })=>{
    let date;
    if (timeLeft && timeLeft[index] && timeLeft[index].date) date = timeLeft[timeLeft.map((time)=>time.id).indexOf(todo.id)].date;
    else return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: date !== null && date === 1 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "1 day left"
        }) : date !== null && date !== 0 && date > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
            children: [
                date,
                " days left"
            ]
        }) : date !== null && date === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "Today"
        }) : date !== null && date < 0 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "Passed"
        }) : ""
    });
};
/* harmony default export */ const todo_card = (TodoCard);

;// CONCATENATED MODULE: ./pages/todo_list_page.js





const TodoListPage = ()=>{
    const { 0: todos , 1: setTodos  } = (0,external_react_.useState)([]);
    const { 0: timeLeft , 1: setTimeLeft  } = (0,external_react_.useState)([]);
    const { 0: showAdd , 1: setShowAdd  } = (0,external_react_.useState)(false);
    const { 0: showEdit , 1: setShowEdit  } = (0,external_react_.useState)(false);
    const { 0: isDeleted , 1: setIsDeleted  } = (0,external_react_.useState)(false);
    const { 0: searchText , 1: setSearchText  } = (0,external_react_.useState)("");
    const { 0: filter , 1: setFilter  } = (0,external_react_.useState)("Default");
    (0,external_react_.useEffect)(()=>{
        setIsDeleted(false);
        getApiClient().getAllTodos(searchText, filter).then((response)=>{
            if (response.data.success) {
                setTodos(response.data.todos);
            } else {
                console.log("Error");
            }
        }).catch((error)=>{
            console.log(error);
        });
    }, [
        showAdd,
        showEdit,
        isDeleted,
        searchText,
        filter
    ]);
    (0,external_react_.useEffect)(()=>{
        getApiClient().getTimeLeft().then((response)=>{
            if (response.data.success) {
                setTimeLeft(response.data.time_left);
            } else {
                console.log("Error");
            }
        }).catch((error)=>{
            console.log(error);
        });
    }, [
        showAdd,
        todos
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "box",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "What's The Plan For Today?"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "input-group mb-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "input-group-prepend",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "input-group-text",
                                id: "basic-addon1",
                                children: "\uD83D\uDD0D"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            className: "form-control",
                            placeholder: "Search for a todo",
                            "aria-label": "Username",
                            "aria-describedby": "basic-addon1",
                            onChange: (e)=>setSearchText(e.target.value)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "space-between-flex",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "filter",
                                    children: "Filter Todos"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                    className: "form-control",
                                    id: "filter",
                                    onChange: (e)=>setFilter(e.target.value),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            children: "Default"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            children: "Today"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            children: "Passed"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            id: "add-btn",
                            className: "btn btn-primary",
                            "data-toggle": "modal",
                            "data-target": "#todoModal",
                            onClick: ()=>setShowAdd(true),
                            children: "Add"
                        }),
                        showAdd ? /*#__PURE__*/ jsx_runtime_.jsx(todo_modal, {
                            type: "add",
                            show: showAdd,
                            setShow: setShowAdd
                        }) : ""
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(todo_card, {
                    show: showEdit,
                    setShow: setShowEdit,
                    todos: todos,
                    timeLeft: timeLeft,
                    setIsDeleted: setIsDeleted
                })
            ]
        })
    });
};
/* harmony default export */ const todo_list_page = (TodoListPage);


/***/ })

};
;