
export default function Self() {


    return (
        <div
            className="bg-transparentContainer h-[125px] xxs:h-[150px] lg:h-[335px]"
            style={{
                aspectRatio: '0.833',
                border: '4px outset rgba(0,0,0,0.3)',
            }}
        >
            {/* {pic} */}
            <img src="/images/Self_Autumn_2.png" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.23)' }} />
        </div>
    );
}
