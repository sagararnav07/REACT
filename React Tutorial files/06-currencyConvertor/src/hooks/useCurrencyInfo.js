import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({}); /*useState me ek empty object dalne ka ye maqsad h ki ek contingency paln h jaise agar koi fetch call nhi ho raha 
    to program crash na kare quki empty object will allow loop bull not return anything*/

    useEffect(() => {
        if (!currency) return; // ✅ Prevent invalid API calls

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => { if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json(); //the above given api will send back a response "we will store it in res"
            })
            .then((res) => {
                if (!res[currency]) {/*har baar api me .json se phle usd aur inr lagane se alag alag exchange rate milte hai to isse pata chalta h ki api me key-value pair h
                    to hume pata h ki object ko access "." lagake aur "[]" dono se ho sakta h to hum idhar response ke andar se [currency] nikal lenge*/
                    throw new Error("Invalid response format");
                }
                setData(res[currency]); // ✅ Ensure valid data
            })
            .catch((error) => {
                console.error("Error fetching currency data:", error);
                setData({}); // ✅ Prevent app crashes
            });
    }, [currency]); //sirf currency hi dependency hao kyuki hume fetch kab-kab call karna h? Jab bhi cureency change ho from inr to usd or any other to us wqt hum fetch call krenge jab currency change ho

    return data;
}

export default useCurrencyInfo;
