import Typography from 'typography'

const typography = new Typography({
    googleFonts: [{
            name: 'Noto Sans JP',
            styles: [
                '500',
                '700',
                '900',
            ],
        },
        {
            name: 'Roboto',
            styles: ['700'],
        },
    ],
})

export default typography