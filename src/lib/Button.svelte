<style lang="scss">
    @import "../scss/utils/index";
    button{
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid $primaryColor;
                gap: 10px;
                font-family: $primaryFont;
                padding: 10px;
                background-color: $primaryColor;
                outline: none;
                cursor: pointer;
                transition: all .45s ease-in-out;
                @include tablet{
                    height: 50px;
                    font-size: 1.15rem;
                    gap: 13px;
                }
                @include laptop{
                    height: 75px;
                    font-size: 1.3rem;
                    gap: 20px;
                }
                &:hover{
                    background-color: transparent;
                    color: $primaryColor;
                    border: 1px solid $primaryColor;
                    
                    svg{
                        stroke: $primaryColor;
                    }
                }
                svg{
                    @include tablet{
                        transform: scale(1.3);
                    }
                    @include laptop{
                        transform: scale(1.6);
                    }
                }
            }
</style>


<button on:click>
    Generate 
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <path
            fill="#24232C"
            d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/>
    </svg>
</button>