type Props = {
    str: string
}
const renderDom = (props: Props, ctx: any) => {
    return <div>
        <input v-model={props.str} type="text" />
        <div onClick={emitNewStr.bind(null, ctx, Math.random().toString())}>change</div>

    </div>
}

const emitNewStr = function (ctx: any, str: string) {
    ctx.emit('on-click', str), str
}
export default renderDom
