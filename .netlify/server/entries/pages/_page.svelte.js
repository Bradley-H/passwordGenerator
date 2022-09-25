import { c as create_ssr_component, d as createEventDispatcher, f as add_attribute, e as escape, h as each, v as validate_component, i as null_to_empty } from "../../chunks/index.js";
const Button_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'button.svelte-1yuju0l.svelte-1yuju0l{display:flex;justify-content:center;align-items:center;border:1px solid #a4ffaf;gap:10px;font-family:"JetBrains Mono", monospace;padding:10px;background-color:#a4ffaf;outline:none;cursor:pointer;transition:all 0.45s ease-in-out}@media(min-width: 768px){button.svelte-1yuju0l.svelte-1yuju0l{height:50px;font-size:1.15rem;gap:13px}}@media(min-width: 1024px){button.svelte-1yuju0l.svelte-1yuju0l{height:75px;font-size:1.3rem;gap:20px}}button.svelte-1yuju0l.svelte-1yuju0l:hover{background-color:transparent;color:#a4ffaf;border:1px solid #a4ffaf}button.svelte-1yuju0l:hover svg.svelte-1yuju0l{stroke:#a4ffaf}@media(min-width: 768px){button.svelte-1yuju0l svg.svelte-1yuju0l{transform:scale(1.3)}}@media(min-width: 1024px){button.svelte-1yuju0l svg.svelte-1yuju0l{transform:scale(1.6)}}',
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<button class="${"svelte-1yuju0l"}">Generate 
    <svg width="${"12"}" height="${"12"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1yuju0l"}"><path fill="${"#24232C"}" d="${"m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"}"></path></svg></button>`;
});
const CheckBox_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".filterBox.svelte-1v1t0ds.svelte-1v1t0ds{display:flex;justify-content:start;align-items:center;gap:15px;position:relative;overflow:hidden}.filterBox.svelte-1v1t0ds input[type=checkbox].svelte-1v1t0ds{position:absolute;opacity:0;width:0;height:0}.filterBox.svelte-1v1t0ds svg.svelte-1v1t0ds{position:absolute;transform:scale(0);transition:all 0.7s ease}.filterBox.svelte-1v1t0ds svg path.svelte-1v1t0ds{stroke:black}.filterBox.svelte-1v1t0ds .checkbox.svelte-1v1t0ds{display:flex;width:20px;height:20px;border:1px solid #a4ffaf;border-radius:5px;justify-content:center;align-items:center;cursor:pointer;transition:all 1s ease 0.3s}.filterBox.svelte-1v1t0ds .checkbox.svelte-1v1t0ds:hover{background-color:#a4ffaf}.filterBox.svelte-1v1t0ds .checkbox.checked.svelte-1v1t0ds{background-color:#a4ffaf;border:1px solid #a4ffaf;color:white}.filterBox.svelte-1v1t0ds .checkbox.checked svg.svelte-1v1t0ds{transition:all 0.7s ease-in-out 0.4s;transform:scale(1.3)}.filterBox.svelte-1v1t0ds label.svelte-1v1t0ds{color:white}",
  map: null
};
const CheckBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { checked = false } = $$props;
  let { id = "" } = $$props;
  let { text = "" } = $$props;
  createEventDispatcher();
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$1);
  return `<div class="${"filterBox svelte-1v1t0ds"}"><input type="${"checkbox"}"${add_attribute("id", id, 0)} class="${"svelte-1v1t0ds"}">
    <span class="${["checkbox svelte-1v1t0ds", checked ? "checked" : ""].join(" ").trim()}"${add_attribute("id", id, 0)}><svg width="${"14"}" height="${"12"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1v1t0ds"}"><path stroke="${"#18171F"}" stroke-width="${"3"}" fill="${"none"}" d="${"M1 5.607 4.393 9l8-8"}" class="${"svelte-1v1t0ds"}"></path></svg></span>
    
    <label${add_attribute("for", id, 0)} class="${"svelte-1v1t0ds"}">${escape(text)}</label></div>`;
});
const boxes = [
  { id: "upper", text: "Incudes uppercase letters", checked: false },
  { id: "lower", text: "Incudes lowercase letters", checked: false },
  { id: "number", text: "Incudes numbers", checked: false },
  { id: "symbol", text: "Incudes symbols", checked: false }
];
const styles = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-ziyn6b section .strength .color.svelte-ziyn6b,main.svelte-ziyn6b section .strength.svelte-ziyn6b,main.svelte-ziyn6b section .length.svelte-ziyn6b,main.svelte-ziyn6b section .header.svelte-ziyn6b,main.svelte-ziyn6b section .filter.svelte-ziyn6b,main.svelte-ziyn6b section .settings.svelte-ziyn6b,main.svelte-ziyn6b section.svelte-ziyn6b,main.svelte-ziyn6b.svelte-ziyn6b{display:flex}main.svelte-ziyn6b section .filter.svelte-ziyn6b,main.svelte-ziyn6b section .settings.svelte-ziyn6b,main.svelte-ziyn6b section.svelte-ziyn6b,main.svelte-ziyn6b.svelte-ziyn6b{flex-direction:column}main.svelte-ziyn6b section .range input[type=range].svelte-ziyn6b,main.svelte-ziyn6b section .length.svelte-ziyn6b,main.svelte-ziyn6b section .settings.svelte-ziyn6b,main.svelte-ziyn6b section .header.svelte-ziyn6b,main.svelte-ziyn6b.svelte-ziyn6b{width:100%}main.svelte-ziyn6b section.svelte-ziyn6b,main.svelte-ziyn6b.svelte-ziyn6b{height:100%}main.svelte-ziyn6b.svelte-ziyn6b{text-align:center;overflow:hidden}main.svelte-ziyn6b section.svelte-ziyn6b{justify-content:center;align-items:center;margin:0 auto;min-width:300px;max-width:500px;gap:15px}@media(min-width: 768px){main.svelte-ziyn6b section.svelte-ziyn6b{min-width:555px;max-width:725px;gap:25px}}@media(min-width: 1024px){main.svelte-ziyn6b section.svelte-ziyn6b{min-width:725px;max-width:875px}}@media(min-width: 1200px){main.svelte-ziyn6b section.svelte-ziyn6b{min-width:876px;max-width:1000px}}main.svelte-ziyn6b section .header.svelte-ziyn6b{justify-content:space-between;align-items:center;padding:18px;background-color:#242320}@media(min-width: 768px){main.svelte-ziyn6b section .header.svelte-ziyn6b{height:60px}}main.svelte-ziyn6b section .header input.svelte-ziyn6b{width:90%;padding:15px 13px;background-color:transparent;border:none;outline:none;color:white;font-size:1.4rem;font-family:"JetBrains Mono", monospace}@media(min-width: 768px){main.svelte-ziyn6b section .header input.svelte-ziyn6b{width:97%}}@media(min-width: 1024px){main.svelte-ziyn6b section .header input.svelte-ziyn6b{width:100%}}main.svelte-ziyn6b section .header svg.svelte-ziyn6b{cursor:pointer;transform:scale(1.3)}@media(min-width: 768px){main.svelte-ziyn6b section .header svg.svelte-ziyn6b{transform:scale(1.5)}}@media(min-width: 1024px){main.svelte-ziyn6b section .header svg.svelte-ziyn6b{transform:scale(1.7)}}main.svelte-ziyn6b section .settings.svelte-ziyn6b{gap:20px;background-color:#242320;padding:18px}@media(min-width: 768px){main.svelte-ziyn6b section .settings.svelte-ziyn6b{font-size:17px}}@media(min-width: 1024px){main.svelte-ziyn6b section .settings.svelte-ziyn6b{font-size:19px}}@media(min-width: 1200px){main.svelte-ziyn6b section .settings.svelte-ziyn6b{font-size:22px}}main.svelte-ziyn6b section .length.svelte-ziyn6b{justify-content:space-between}main.svelte-ziyn6b section .length h1.svelte-ziyn6b:last-of-type{color:#a4ffaf}@media(min-width: 1200px){main.svelte-ziyn6b section .length.svelte-ziyn6b{font-size:1.24rem}}@media(min-width: 1440px){main.svelte-ziyn6b section .length.svelte-ziyn6b{font-size:1.4rem}}main.svelte-ziyn6b section .range input[type=range].svelte-ziyn6b{background-repeat:no-repeat;background-size:0% 100%;background-image:linear-gradient(#a4ffaf, #a4ffaf)}@media(min-width: 768px){main.svelte-ziyn6b section .range input[type=range].svelte-ziyn6b{height:15px}}@media(min-width: 1024px){main.svelte-ziyn6b section .range input[type=range].svelte-ziyn6b{height:22px}}main.svelte-ziyn6b section .range input[type=range].svelte-ziyn6b::-moz-range-thumb{height:20px;width:20px;border-radius:50%;background:white;cursor:ew-resize;transition:background 0.4s ease-in-out;background-size:5% 100%}@media(min-width: 1024px){main.svelte-ziyn6b section .range input[type=range].svelte-ziyn6b::-moz-range-thumb{height:23px;width:23px}}main.svelte-ziyn6b section .range input[type=range].svelte-ziyn6b::-moz-range-thumb:active{background:black}main.svelte-ziyn6b section .filter.svelte-ziyn6b{gap:10px}@media(min-width: 768px){main.svelte-ziyn6b section .filter.svelte-ziyn6b{gap:15px}}@media(min-width: 1024px){main.svelte-ziyn6b section .filter.svelte-ziyn6b{gap:18px}}main.svelte-ziyn6b section .strength.svelte-ziyn6b{justify-content:space-around;padding:15px;background-color:#18171f}@media(min-width: 768px){main.svelte-ziyn6b section .strength.svelte-ziyn6b{padding:18px}}@media(min-width: 1024px){main.svelte-ziyn6b section .strength.svelte-ziyn6b{padding:20px}}main.svelte-ziyn6b section .strength h3:last-of-type.Weak.svelte-ziyn6b{color:#F64a4a}main.svelte-ziyn6b section .strength h3:last-of-type.Medium.svelte-ziyn6b{color:#fb7c58}main.svelte-ziyn6b section .strength h3:last-of-type.Strong.svelte-ziyn6b{color:#a4ffaf}main.svelte-ziyn6b section .strength .color.svelte-ziyn6b{gap:7px}@media(min-width: 768px){main.svelte-ziyn6b section .strength .color.svelte-ziyn6b{gap:9px}}main.svelte-ziyn6b section .strength .color.Weak span.svelte-ziyn6b:first-child{background-color:#F64a4a}main.svelte-ziyn6b section .strength .color.Medium span.svelte-ziyn6b:first-child,main.svelte-ziyn6b section .strength .color.Medium span.svelte-ziyn6b:nth-of-type(2){background-color:#fb7c58}main.svelte-ziyn6b section .strength .color.Strong span.svelte-ziyn6b:first-child,main.svelte-ziyn6b section .strength .color.Strong span.svelte-ziyn6b:nth-of-type(2),main.svelte-ziyn6b section .strength .color.Strong span.svelte-ziyn6b:nth-of-type(3),main.svelte-ziyn6b section .strength .color.Strong span.svelte-ziyn6b:nth-of-type(4){background-color:#a4ffaf}main.svelte-ziyn6b section .strength .color span.svelte-ziyn6b{border:1px solid white;padding:0.15rem}@media(min-width: 768px){main.svelte-ziyn6b section .strength .color span.svelte-ziyn6b{padding:0 0.2rem}}@media(min-width: 1024px){main.svelte-ziyn6b section .strength .color span.svelte-ziyn6b{padding:0 0.3rem}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let passwordLength;
  let maxLength;
  let minLength;
  let passwordString;
  let passwordStrength;
  let backgroundSize;
  $$result.css.add(css);
  passwordLength = 2;
  maxLength = 20;
  minLength = 0;
  passwordString = "";
  passwordStrength = "";
  backgroundSize = (passwordLength - maxLength) * 100 / (maxLength - minLength) + 100;
  return `<main class="${"svelte-ziyn6b"}"><section class="${"svelte-ziyn6b"}"><h2>Password Generator</h2>
        <div class="${"header svelte-ziyn6b"}"><input type="${"text"}"${add_attribute("value", passwordString, 0)} class="${"svelte-ziyn6b"}">
            <svg width="${"21"}" height="${"24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-ziyn6b"}"><path d="${"M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"}" fill="${"#A4FFAF"}"></path></svg></div>
        <div class="${"settings svelte-ziyn6b"}"><div class="${"length svelte-ziyn6b"}"><h1 class="${"svelte-ziyn6b"}">Character Length</h1>
                <h1 class="${"svelte-ziyn6b"}">${escape(passwordLength)}</h1></div>
            <div class="${"range"}"><input type="${"range"}"${add_attribute("min", minLength, 0)}${add_attribute("max", maxLength, 0)} style="${"background-size: " + escape(backgroundSize, true) + "% 100%;"}" class="${"svelte-ziyn6b"}"${add_attribute("value", passwordLength, 0)}></div>
            <div class="${"filter svelte-ziyn6b"}">${each(boxes, (box, i) => {
    return `${validate_component(CheckBox, "CheckBox").$$render($$result, Object.assign(box), {}, {})}`;
  })}</div>
            <div class="${"strength svelte-ziyn6b"}"><h3>Strength</h3>
                <h3 class="${escape(null_to_empty(passwordStrength), true) + " svelte-ziyn6b"}">${escape(passwordStrength)}</h3>
                <div class="${"color " + escape(passwordStrength, true) + " svelte-ziyn6b"}"><span class="${"svelte-ziyn6b"}"></span>
                    <span class="${"svelte-ziyn6b"}"></span>
                    <span class="${"svelte-ziyn6b"}"></span>
                    <span class="${"svelte-ziyn6b"}"></span></div></div>
            
            ${validate_component(Button, "Button").$$render($$result, {}, {}, {})}</div></section></main>`;
});
export {
  Page as default
};
