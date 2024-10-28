const loginFormData = [
    {
        level: "Enter mess id or e-mail",
        placeholder: "Enter mess id or e-mail",
        type: "text",
        name: "messId",
        required: true,
    },
    {
        level: "Enter password",
        placeholder: "Enter password",
        type: "password",
        name: "messPass",
        required: true,
    }
];

const registerFormData = [
    {
        level: "Enter mess name",
        placeholder: "Enter mess name",
        type: "text",
        name: "messName",
        required: true,
    },
    {
        level: "Enter mess id",
        placeholder: "Enter mess id",
        type: "text",
        name: "messId",
        required: true,
    },

    {
        level: "Enter mess email",
        placeholder: "Enter mess email",
        type: "email",
        name: "messEmail",
        required: true,
    },
    {
        level: "Enter password",
        placeholder: "Enter password",
        type: "password",
        name: "messPassword",
        required: true,
    }
];

const addMemberData = [
    {
        level: "Member name",
        placeholder: "Member name",
        type: "text",
        name: "name",
        required: true,
    },
    {
        level: "Member email",
        placeholder: "Member email",
        type: "email",
        name: "email",
        required: true,
    },
    {
        level: "Enter phone",
        placeholder: "Enter phone",
        type: "tel",
        name: "phone",
        required: true,
    }
];

const addExtraData = [
    {
        level:"Enter wifi bills",
        placeholder: "Wifi bills",
        type: "number",
        name: "wifiBill",
        required: true,
    },
    {
        level:"Enter fixed meal",
        placeholder: "Fixed meal",
        type: "number",
        name: "fixedMeal",
        required: true,
    },
    {
        level:"Enter khala bills",
        placeholder: "Klala bills",
        type: "number",
        name: "khalaBill",
        required: true,
    },
    {
        level:"Enter Others",
        placeholder: "Others",
        type: "number",
        name: "others",
        required: false,
    },
]

export {loginFormData,registerFormData,addMemberData,addExtraData};

