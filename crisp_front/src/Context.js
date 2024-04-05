import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";


export const CustomContext = createContext();

export const Context = (props) => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios('http://localhost:3030/product_crisp')
            .then(({data}) => {
                setProduct(data)
            })
    }, [])

    const [sizeFilter, setSizeFilter] = useState([]);
    useEffect(() => {
        axios('http://localhost:3030/product_size')
            .then(({data}) => {
                setSizeFilter(data)
            })
    }, [])


    const [brandFilter, setBrandFilter] = useState([]);
    useEffect(() => {
        axios('http://localhost:3030/product_brand')
            .then(({data}) => {
                setBrandFilter(data)
            })
    }, [])

    const [cheketBrand, setCheketBrand] = useState([]);
    const cheket = (ber) => {
        const find = brandFilter.find(el => el.brand === ber);
        setCheketBrand([...cheketBrand, find.brand])
    };
    const cheketDekete = (ber) => {
        const find = cheketBrand.find(el => el === ber);
        setCheketBrand(cheketBrand.filter((el) => {
            if (el !== ber) {
                return [...cheketBrand, el !== find]
            }
        }))
    };

    const [sizeFilterActive, setSizeFilterActive] = useState([]);
    const activeSize = (sez) => {
        const find = sizeFilter.find(el => el.size_filter === sez);
        setSizeFilterActive([...sizeFilterActive, find.size_filter])
    };

    const activeSizeDelete = (sez) => {
        const find = sizeFilter.find(el => el === sez);
        setSizeFilterActive(sizeFilterActive.filter((el) => {
            if (el !== sez) {
                return [...sizeFilterActive, el !== find]
            }
        }))
    };

    const [inputr, SetInputr] = useState(0);
    let inputRange = (num) => {
        return num
    };

    const [mainInd, setMainInd] = useState(0);
    const [ind, setInd] = useState(0);
    const handleClick = (mainIndex, index) => {
        setInd(index);
        setMainInd(mainIndex)
    };

    const [color, setColor] = useState([]);
    useEffect(() => {
        axios('http://localhost:3030/product_color')
            .then(({data}) => {
                setColor(data)
            })
    }, []);

    const [colorActive, setColorActive] = useState([]);
    const colorDap = (col) => {
        const find = color.find(el => el.color === col);
        setColorActive([...colorActive, find.color]);
        console.log(colorActive)
    };

    const colorDelete = (col) => {
        const find = colorActive.find(el => el === col);
        setColorActive(colorActive.filter((el) => {
            if (el !== col) {
                return [...colorActive, el !== find]
            }
        }))
    };

    const [accordion1, setAccordion1] = useState(true)
    const activeAccordion1 = () => {
        setAccordion1(accordion1 !== true)
    };
    const [accordion2, setAccordion2] = useState(false)
    const activeAccordion2 = () => {
        setAccordion2(accordion2 !== true)
    };
    const [accordion3, setAccordion3] = useState(false)
    const activeAccordion3 = () => {
        setAccordion3(accordion3 !== true)
    };


    const [activeSection, setActiveSection] = useState('')
    const [emailEdit, setEmailEdit] = useState(false)
    const [passwordEdit, setPasswordEdit] = useState(false)
    const [country, setCountry] = useState(false)
    const [countryP, setCountryP] = useState('')
    const [state, setState] = useState(false)
    const [stateP, setStateP] = useState('')

    const activP = (item) => {
        setActiveSection(item.target.textContent)
        console.log(activeSection)
    }

    const countryP_text = (acrd) => {
        setCountryP(acrd.target.textContent)
    }
    const countryActive = () => {
        setCountry(country !== true)
    }

    const stateP_text = (acrd) => {
        setStateP(acrd.target.textContent)
    }
    const stateActive = () => {
        setState(state !== true)
    }


    const editpassword = () => {
        setPasswordEdit(passwordEdit !== true)
    }

    const editEmail = () => {
        setEmailEdit(emailEdit !== true)
    }

    const [oneProduct, setOneProduct] = useState({});
    const [basket, setBasket] = useState([])

    const addBasket = (id) => {
        setBasket([...basket, id])
    }
    console.log(basket)

    const deleteObject = (id)=>{
        const find = basket.find (el =>el.id === id)
        setBasket(basket.filter((el)=>{
            if (el.id !== id){
                return [...basket,el.id !== find]
            }
        }))
    }



    const value = {
        oneProduct,
        setOneProduct,
        product,
        setProduct,
        sizeFilter,
        brandFilter,
        cheketBrand,
        cheket,
        cheketDekete,
        sizeFilterActive,
        activeSize,
        activeSizeDelete,
        inputr,
        inputRange,
        mainInd,
        ind,
        handleClick,
        color,
        colorActive,
        colorDap,
        setColorActive,
        colorDelete,
        SetInputr,
        accordion1,
        accordion2,
        accordion3,
        activeAccordion1,
        activeAccordion2,
        activeAccordion3,
        activeSection,
        emailEdit,
        passwordEdit,
        country,
        countryP,
        state,
        stateP,
        activP,
        countryP_text,
        countryActive,
        stateP_text,
        stateActive,
        editpassword,
        editEmail,
        addBasket,
        basket,
        deleteObject
    };
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}