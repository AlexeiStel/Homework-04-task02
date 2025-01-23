import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import './App.css';
import { useLocalStorage } from "./useLocalStorage";
function Demo() {
    const [value, { setItem, removeItem }] = useLocalStorage("some-key");
    return (_jsxs("div", { children: [_jsxs("p", { children: ["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0438\u0437 LocalStorage: ", value] }), _jsxs("div", { children: [_jsx("button", Object.assign({ onClick: () => setItem("new storage value") }, { children: "\u0417\u0430\u0434\u0430\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435" })), _jsx("button", Object.assign({ onClick: () => removeItem() }, { children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435" }))] })] }));
}
export default Demo;
