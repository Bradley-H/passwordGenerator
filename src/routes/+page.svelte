<script lang="ts">
    //Components
    import Button from "$lib/Button.svelte";
    import CheckBox from "$lib/CheckBox.svelte";
    // Constants
    import { boxes} from "../constants/checkboxes";
    // Variables
    let passwordLength = +5
    let maxLength = +20
    let minLength = +0
    let passwordString = ""
    $: passwordStrength = ""
    $: console.log(passwordString)
    // Reactive Values //
    $: backgroundSize =((passwordLength - maxLength) *100) / (maxLength - minLength) +`% 100%`;
// this function is the framework for the getrandomLower, upper .etc, to reduce markup
const getRandomFunc = (min: number, max: number) => {
    return String.fromCharCode(Math.floor(Math.random() * min) + max)};

// this use the getrandomFunc to get a random character from the ascii table 
 const getRandomLower = () => String(getRandomFunc(26, 97));
 const getRandomUpper = () => String(getRandomFunc(26, 65));
 const getRandomNumber = () => parseInt(getRandomFunc(10, 48));
 const getRandomSymbol = () => {
    const symbols = "!@#$%^&*(){}[]/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
};
    //this'll call the functions based on the checkbox values
    const randomFunc = {
        lower: getRandomLower,
        upper: getRandomUpper,
        number: getRandomNumber,
        symbol: getRandomSymbol,
    }

 


    let passwordGenerator = {
        // this'll remove and add a checked value to the checkbox
        CheckBox(index: string){
            boxes.find(box => { 
                if(index === box.id){box.checked = !box.checked}
             })
        },
        // this'll generate a password based on the checkbox values, and run the functions or not
        generatePassword(upper:string, lower:string, number:number, symbol: any) {
            passwordString = "";
            // filter out unchecked types
            const typesCount = boxes.filter(box => box.checked).length;
            const typesArr = boxes.filter(box => box.checked).map(box => box.id);
            // don't run if nothing is checked or if the length is 0
            if (typesCount === 0 || passwordLength === 0) {
                return "";
            }
            // loop over the length and call the generator function for each type
            for(let i = 0; i < passwordLength; i += typesCount) {
                typesArr.forEach(type => {
                    const funcName = type;
                    passwordString += randomFunc[funcName]();
                });
            }
            this.passwordStrength()
        },
        // Determine the strength of the password
        passwordStrength(){
            if(passwordLength <= 5){
                passwordStrength = "Weak"
            } else if(passwordLength <= 10){
                passwordStrength = "Medium"
            } else if(passwordLength >= 11){
                passwordStrength = "Strong"
            }
        },
        // copy to clipboard
        copyToClipboard(){
            navigator.clipboard.writeText(passwordString)
        }
    }

    // SCSS DEFINITIONS //
    import "../scss/styles.scss";
</script>

<style lang="scss">
    @import "../scss/utils/index";
    main {
        display: flex;
        flex-direction: column;
        height: 100vh;
        text-align: center;
        width: 100%;
        padding: 25px;

        section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            height: 100%;
            min-width: 300px;
            max-width: 500px;
            gap: 15px;
            .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: $primaryPadding;
                background-color: $cardColor;
                width: 100%;
                input {
                    width: 91%;
                    padding: 15px 13px;
                    background-color: transparent;
                    border: none;
                    outline: none;
                    color: white;
                    font-size: 1.4rem;
                    font-family: $primaryFont;
                }
                svg {
                    cursor: pointer;
                    transform: scale(1.3);
                }
            }
            .settings {
                display: flex;
                flex-direction: column;
                width: 100%;
                gap: 20px;
                background-color: $cardColor;
                padding: $primaryPadding;
            }
            .length {
                display: flex;
                justify-content: space-between;
                width: 100%;
                h1:last-of-type {
                    color: $primaryColor;
                }
            }
            .range {
                input[type="range"] {
                    width: 100%;
                    background-repeat: no-repeat;
                    background-image: linear-gradient(
                        $primaryColor,
                        $primaryColor
                    );

                    &::-moz-range-thumb {
                        height: 20px;
                        width: 20px;
                        border-radius: 50%;
                        background: white;
                        cursor: ew-resize;
                        transition: background 0.4s ease-in-out;
                        background-size: 5% 100%;
                        &:active {
                            background: black;
                        }
                    }
                }
            }
            .filter {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .strength {
                display: flex;
                justify-content: space-around;
                padding: 15px;
                background-color: $bgColor;
                .color {
                    display: flex;
                    gap: 6px;
                    span {
                        border: 2px solid white;
                        padding: 0.13rem;
                    }
                }
                h3:last-of-type{
                    &.Weak{
                        color: $dangerColor;
                    }
                    &.Medium{
                        color: $warmColor;
                    }
                    &.Strong{
                        color: $primaryColor;
                    }
                }
            }
        }
    }
</style>


<main>
    <section>
        <h2>Password Generator</h2>
        <div class="header">
            <input type="text" value={passwordString}>
            <svg width="21" height="24" on:click={passwordGenerator.copyToClipboard} xmlns="http://www.w3.org/2000/svg"><path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" fill="#A4FFAF"/></svg>
        </div>
        <div class="settings">
            <div class="length">
                <h1>Character Length</h1>
                <h1>{passwordLength}</h1>
            </div>
            <div class="range">
                <input type="range" min={minLength} max={maxLength} style="background-size: {backgroundSize};" bind:value={passwordLength}>
            </div>
            <div class="filter">
                {#each boxes as box, i (box.id)}
                    <CheckBox {...box} on:checked={() => passwordGenerator.CheckBox(box.id)}/>
                {/each}
            </div>
            <div class="strength">
                <h3>Strength</h3>
                <h3 class="{passwordStrength}">{passwordStrength}</h3>
                <div class="color">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <!-- BUTTON that'll generate the password -->
            <Button on:click={() => passwordGenerator.generatePassword(getRandomUpper, getRandomLower, getRandomNumber, getRandomSymbol)}/>
        </div>
    </section>
</main>