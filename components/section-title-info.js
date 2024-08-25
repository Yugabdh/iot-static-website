import React from 'react'

const SectionTitleInfo = (props) => {
  return (
    <section
      className={`flex w-full flex-col py-10 bg-slate-900 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.preTitle && (
        <div className="text-sm font-bold tracking-wider text-sky-400">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-headline font-bold leading-snug tracking-tight text-white lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-400 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </section>
  )
}

export default SectionTitleInfo