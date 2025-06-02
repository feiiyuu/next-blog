export default function NotFound() {
    return (
        <div flex='1 ~ justify-center items-center' w='100%'>
            <div>
                <h1 text='center' m='2'>404</h1>
                <div flex='~' 
                border='b-2px r-0 l-0 t-0 solid green'
                >
                    <h3 text='center' m='[0px_4px]'>NOT FOUND</h3>
                    <div className="i-ion-ios-game-controller-b-outline" text='2xl' />
                </div>
            </div>
        </div>
    )
}

export async function generateMetadata() {
    return {
        title: '页面不存在！'
    }
}