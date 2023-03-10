import React, {useRef} from 'react';
import {Head} from "../seo/Head/Head";
import Nav from "../components/Header/Nav/Nav";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";
import {GetServerSideProps} from "next";
import {fetchCategories} from "../utils/fetchCategories";
import {fetchProducts} from "../utils/fetchProducts";
import { Nunito, Titan_One } from '@next/font/google'
import Product from "../components/Products/Product";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "usehooks-ts";

const nunito = Nunito({ subsets: ['latin'] });
export const titan = Titan_One({
    subsets: ['latin'],
    weight: '400'
});

interface Props {
    categories: Category[];
    products: Product[];
}

function Shop({ products, categories } : Props) {

    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline();

    let scrollRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            t1.from('.line', {
                scrollTrigger: {
                    trigger: '.line',
                    start: "top bottom",
                    end: "bottom 350px",
                    scrub: 1,
                },
                duration: 1.8,
                y: 100,
                opacity: 0,
                ease: "power4.out",
                delay: 0.1,
                stagger: {
                    amount: 0.6
                }

            });
        }, scrollRef); // <- scopes all selector text to the root element

        return () => ctx.revert();
    }, );


    return (
        <div>
            <Head title='Sherman Furniture - Shop' description='Modern furniture and design store'/>

            <div className='relative h-[100vh] '>
                <Nav/>
                <div className="absolute -z-10 top-0 left-0 header h-full w-full bg-center bg-[url('https://images.unsplash.com/photo-1618221312573-404f9a52798d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')]">
                    <div className="bg-black bg-opacity-40 w-full h-full absolute spacing flex justify-center items-center">
                    <h1 className='text-6xl text-white z-50 font-bold' style={titan.style}>Shop</h1>
                    </div>
                </div>
            </div>

            <div ref={scrollRef}>
                <div className="products spacing grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {
                        products.map((product: Product) => (
                            <div key={product._id} className='line'>
                                <Product product={product}/>
                            </div>
                        ))
                    }
                </div>
            </div>

            <CTA/>
            <Footer/>
        </div>
    );
}

export default Shop;


// BACKEND CODE

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

    const categories = await fetchCategories();
    const products = await fetchProducts();
    // const session = await getSession(context);

    return {
        props: {
            categories,
            products,
            //session,
        },
    }
}