'use client'

export default function Dialog({ children, className, ...props }) {
    const handleClickOutside = (e) => {
        if (e.target instanceof HTMLElement && e.target.nodeName === 'DIALOG') {
            e.target.close();
        }
    }

    return (
        <dialog className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary rounded-lg overflow-hidden max-w-3xl w-full" {...props} onClick={handleClickOutside}>
            <div className={className}>
                {children}
            </div>
        </dialog>
    )
}
