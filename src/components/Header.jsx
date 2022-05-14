/*
 * File Created: Saturday, 14th May 2022 4:33:11 pm
 * Author: Amarjit Pheiroijam
 */
import React from 'react'
import Confetti from 'react-confetti'

export default function Header({confeti}) {
  return (
    <section class="w-full bg-white">
        <div class="relative items-center w-full px-5 py-8 mx-auto md:px-12 lg:px-8 max-w-7xl lg:py-20">
            <div class="flex w-full mx-auto text-left">
                
            <div class="relative inline-flex items-center mx-auto align-middle">
                <div class="text-center">
                <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                    Vinsol Quiz <br class="hidden lg:block" />
                    <Confetti width={600} height={900} numberOfPieces={confeti}/>
                    
                </h1>
                <p class="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">This is a react application is created during the exercise round of the VinSol Javascript Developer recruitment and it has to be completed in two days</p>
                </div>
                
            </div>
            </div>
        </div>
     </section>
  )
}
