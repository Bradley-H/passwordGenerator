<script lang="ts">
    //Components
    import Button from "$lib/Button.svelte";
    import CheckBox from "$lib/CheckBox.svelte";
    // Constants
    import { boxes } from "../constants/checkboxes";
    // variables
    let copied = false;
    // Reactive Values //
    $: backgroundSize =
        ((passwordLength - maxLength) * 100) / (maxLength - minLength) + 100;
    $: passwordLength = +5;
    $: passwordString = "";
    $: passwordStrength = "";
    $: maxLength = 25;
    $: minLength = +5;
    // this function is the framework for the getrandomLower, upper .etc, to reduce markup
    const getRandomFunc = (min: any, max: any) => {
        return String.fromCharCode(Math.floor(Math.random() * min) + max);
    };

    // this uses the getrandomFunc to get a random character from the ascii table
    const getRandomLower = () => getRandomFunc(26, 97);
    const getRandomUpper = () => getRandomFunc(26, 65);
    const getRandomNumber = () => getRandomFunc(10, 48);
    const getRandomSymbol = () => {
        const symbols = "!@#$%^&*(){}[]/,.";
        return String(symbols[Math.floor(Math.random() * symbols.length)]);
    };
    //this'll call the functions based on the checkbox values
    const randomFunc = {
        lower: getRandomLower,
        upper: getRandomUpper,
        number: getRandomNumber,
        symbol: getRandomSymbol,
    };

let passwordGenerator = {
        // this'll remove and add a checked value to the checkbox
        CheckBox(index: string) {
            boxes.find((box) => {
                if (index === box.id) {
                    box.checked = !box.checked;
                }
            });
        },
        // this'll generate a password based on the checkbox values, and run the functions or not
        generatePassword(
            upper: string,
            lower: string,
            number: string,
            symbol: string) {
            passwordString = "";
            // filter out unchecked types
            const typesCount = boxes.filter((box) => box.checked).length;
            const typesArr = boxes.filter((box) => box.checked).map((box) => box.id);

                
            // don't run if nothing is checked or if the length is 0
            if (typesCount < 1 || passwordLength  === 0) {
                return "";
            }
            // loop over the length, call the function for each type that is checked and add the value to the password string
            for (let i = 0; i <= passwordLength - 1; i += typesCount) {   
                typesArr.forEach(type => {
                    const funcName = randomFunc[type]; 
                    passwordString += funcName();
                });   
                passwordString = passwordString.slice(0, passwordLength);
            }
            this.passwordStrength();
        },
        // Determine the strength of the password
        passwordStrength() {
            if (passwordLength <= 5) {
                passwordStrength = "Weak";
            } else if (passwordLength <= 10) {
                passwordStrength = "Medium";
            } else if (passwordLength >= 11) {
                passwordStrength = "Strong";
            }
        },
        // copy to clipboard
        copyToClipboard() {
            if (passwordString.length !== 0) {
                setTimeout(() => {
                copied = false;
            }, 4000);
            } else {
                return
            }
            navigator.clipboard.writeText(passwordString);
            copied = true;
            
        },
    };

    // SCSS DEFINITIONS //
    import "../scss/styles.scss";
</script>

<style lang="scss">
    @import "../scss/utils/index";
    main {
        @extend %flexCol;
        @extend %h100;
        text-align: center;
        @extend %w100;
        overflow: hidden;

        .toast{
            display: grid;
            place-self: center;
            margin-top: 1rem;
            border: 2px solid $primaryColor;;
            transition: transform .5s ease-in-out;
            color: $primaryColor;
            padding: 15px;
            width: 310px;
            transform: translateY(-15rem);
            @include tablet{
                width: max-content;
            }
            &.active{
                transform: translateX(0)
            }
        }

        section {
           @extend %flexCol;
            align-items: center;
            margin: 0 auto;
            @extend %h100;
            width: 85%;
            gap: 15px;
            padding: .25rem;
            @include tablet{
                min-width: 555px;
                max-width: 725px;
                gap: 25px;
            }
            @include laptop{
                min-width: 725px;
                max-width: 875px;
            }
            @include desktop{
                min-width: 876px;
                max-width: 900px;
            }
            .header {
                @extend %flex;
                justify-content: space-between;
                align-items: center;
                padding: $primaryPadding;
                background-color: $cardColor;
                position: relative;
                @extend %w100;
                @include tablet{
                    height: 60px
                }
                input {
                    width: 90%;
                    padding: 15px 13px;
                    background-color: transparent;
                    border: none;
                    outline: none;
                    color: white;
                    font-size: 1.4rem;
                    font-family: $primaryFont;
                    @include tablet{
                        width: 97%;
                    }
                    @include laptop{
                        width: 100%;
                    }
                }
                svg {
                    cursor: pointer;
                    transform: scale(1.3);
                    @include tablet{
                        transform: scale(1.5);
                    }
                    @include laptop{
                        transform: scale(1.7);
                    }
                    &.disabled{
                        opacity: 0.5;
                        pointer-events: none;
                    }
                }
            }
            .settings {
                @extend %flexCol;
                @extend %w100;
                gap: 20px;
                background-color: $cardColor;
                padding: $primaryPadding;
                @include tablet{
                    font-size: 17px;
                }
                @include laptop{
                    font-size: 19px;
                }
                @include desktop{
                    font-size: 22px;
                }
            }
            .length {
                @extend %flex;
                justify-content: space-between;
                @extend %w100;
                h1:last-of-type {
                    color: $primaryColor;
                }
                @include desktop{
                    font-size: 1.24rem;
                }
                @include large{
                    font-size: 1.4rem;
                }
            }
            .range {
                input[type="range"] {
                    @extend %w100;
                    background-repeat: no-repeat;
                    background-size: 0% 100%;
                    background-image: linear-gradient(
                        $primaryColor,
                        $primaryColor
                    );
                    @include tablet{
                        height: 15px;
                    }
                    @include laptop{
                        height: 22px;
                    }

                    &::-moz-range-thumb {
                        height: 20px;
                        width: 20px;
                        border-radius: 50%;
                        background: white;
                        cursor: ew-resize;
                        transition: background 0.4s ease-in-out;
                        background-size: 5% 100%;
                        @include laptop{
                            height: 23px;
                            width: 23px;
                        }
                        &:active {
                            background: black;
                        }
                    }
                }
            }
            .filter {
                @extend %flexCol;
                gap: 10px;
                @include tablet{
                    gap: 15px;
                }
                @include laptop{
                    gap: 18px;
                }
            }
            .strength {
                @extend %flex;
                justify-content: space-around;
                padding: 15px;
                background-color: $bgColor;
                @include tablet{
                    padding: 18px;
                }
                @include laptop{
                    padding: 20px;
                }
                h3:last-of-type {
                    &.Weak {
                        color: $dangerColor;
                    }
                    &.Medium {
                        color: $warmColor;
                    }
                    &.Strong {
                        color: $primaryColor;
                    }
                }
                .color {
                    @extend %flex;
                    gap: 7px;
                    @include tablet{
                        gap: 9px;
                    }
                    &.Weak {
                        span:first-child {
                            background-color: $dangerColor;
                        }
                    }
                    &.Medium {
                        span:first-child,
                        span:nth-of-type(2) {
                            background-color: $warmColor;
                        }
                    }
                    &.Strong {
                        span:first-child,
                        span:nth-of-type(2),
                        span:nth-of-type(3),
                        span:nth-of-type(4)
                         {
                            background-color: $primaryColor;
                        }
                    }
                    span {
                        border: 1px solid white;
                        padding: 0.15rem;
                        @include tablet{
                            padding: 0 .20rem;
                        }
                        @include laptop{
                            padding: 0 .3rem;
                        }
                    }
                }
            }
        }
    }
</style>


<main>
        <div class="toast" class:active={copied}>
            <h2>Your password has been copied.</h2>
        </div>
    <section>
        <h2>Password Generator</h2>
        <div class="header">
            <input type="text" value={passwordString}>
            <svg width="21" class:disabled={copied || passwordString.length === 0} height="24" on:click={passwordGenerator.copyToClipboard} xmlns="http://www.w3.org/2000/svg"><path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" fill="#A4FFAF"/></svg>
        </div>
        <div class="settings">
            <div class="length">
                <h1>Character Length</h1>
                <h1>{passwordLength}</h1>
            </div>
            <div class="range">
                <input type="range" min={minLength || 5} max={maxLength} style="background-size: {backgroundSize}% 100%;" bind:value={passwordLength}>
            </div>
            <div class="filter">
                {#each boxes as box (box.id)}
                    <CheckBox {...box} on:checked={() => passwordGenerator.CheckBox(box.id)}/>
                {/each}
            </div>
            <div class="strength">
                <h3>Strength</h3>
                <h3 class="{passwordStrength}">{passwordStrength}</h3>
                <div class="color {passwordStrength}">
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