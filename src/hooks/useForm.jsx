import { useState } from "react";

export const useForm = ( initialObject = {} ) => {

    const [form, setForm] = useState({initialObject});

    const serializeForm = (form) => {
        //Esto es lo mismo que crear el let course que hice abajo
        const formData = new FormData(form);

        const fullObject = {};

        //Creo un array con el name y el value recorriendo el formdata
        for (let [name, value] of formData) {
            fullObject[name] = value;
        }

        return fullObject;
    }

    const sended = (e) => {
        e.preventDefault();
        // let course = {
        //     title: e.target.title.value,
        //     anio: e.target.anio.value,
        //     description: e.target.description.value,
        //     autor: e.target.autor.value,
        //     email: e.target.email.value,
        // }
        let course = serializeForm(e.target);

        setForm(course);

        document.querySelector(".code").classList.add("sended");
    }

    const changed = ({target}) => {
        const {name, value} = target;

        //Agarro todo lo que ya habia y abajo lo reemplazo por lo que venga
        setForm({
            ...form, 
            [name]: value
        })
    }

    return {
        form,
        sended,
        changed
    };
}