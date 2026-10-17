"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import BestSellers from "@/components/BestSellers";
import productsData from "../../../../config/products.json";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

interface Review {
  id: number;
  author: string;
  date: string;
  rating: number;
  text: string;
}

const initialReviews: Review[] = [
  {
    id: 1,
    author: "Melissa Johnson",
    date: "August 12, 2026",
    rating: 5,
    text: "The fabric drape is exquisite. The seams are cleanly tailored, and the fit is wonderfully flattering for both casual days and dinners.",
  },
  {
    id: 2,
    author: "Patricia Filips",
    date: "July 28, 2026",
    rating: 5,
    text: "Such lovely organic cotton! It breathed beautifully in the afternoon sun and washed without any shrinkage. Will order in another shade.",
  },
  {
    id: 3,
    author: "Olivia Jenkins",
    date: "June 15, 2026",
    rating: 5,
    text: "Arrived within 3 business days in lovely packaging. The European sizing was accurate and comfortable. 10/10 recommend.",
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const productId = typeof params.id === "string" ? params.id : Array.isArray(params.id) ? params.id[0] : "";
  const product = products.find((p) => p.id === productId);

  const [selectedImage, setSelectedImage] = useState<string>(product?.image || "");
  const [selectedSize, setSelectedSize] = useState<string>(product?.sizes ? product.sizes[0] : "M");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "reviews">("description");
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Reviews state
  const [reviewsList, setReviewsList] = useState<Review[]>(initialReviews);
  const [newReviewAuthor, setNewReviewAuthor] = useState("");
  const [newReviewEmail, setNewReviewEmail] = useState("");
  const [newReviewText, setNewReviewText] = useState("");
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  if (!product) {
    return (
      <>
        <Header />
        <main className="max-w-7xl mx-auto px-6 py-28 text-center bg-neutral-bg">
          <h2 className="font-heading text-3xl font-bold uppercase text-primary mb-4">
            Product Not Found
          </h2>
          <p className="text-neutral-text/60 mb-8 max-w-md mx-auto text-sm">
            The garment you are looking for does not exist or has been moved from our boutique catalog.
          </p>
          <button
            className="fashion-button"
            onClick={() => router.push("/shop")}
          >
            Return to Shop
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, product.ssPrice, `Size: ${selectedSize}`, selectedSize);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReviewAuthor.trim() && newReviewText.trim()) {
      const newReviewItem: Review = {
        id: Date.now(),
        author: newReviewAuthor,
        date: "Just now",
        rating: newReviewRating,
        text: newReviewText,
      };
      setReviewsList([newReviewItem, ...reviewsList]);
      setNewReviewAuthor("");
      setNewReviewEmail("");
      setNewReviewText("");
      setReviewSubmitted(true);
      setTimeout(() => setReviewSubmitted(false), 4000);
    }
  };

  const productImages = product.images && product.images.length > 0 ? product.images : [product.image];
  const activeDisplayImage = selectedImage || product.image;

  return (
    <>
      <Header />
      <main className="flex-grow bg-[#FAF9F7]">
        
        {/* Inner Top Header Banner with Breadcrumbs */}
        <section className="bg-white py-8 md:py-12 border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-primary mb-2">
              Shop Details
            </h1>
            <nav aria-label="Breadcrumb" className="breadcrumbs-list">
              <Link href="/">Home</Link>
              <span className="breadcrumbs-separator" />
              <Link href="/shop">Shop</Link>
              <span className="breadcrumbs-separator" />
              <span className="text-primary font-bold">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Product Card Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl border border-black/5 p-6 sm:p-10 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              {/* Left Column: Gallery & Thumbnails (6 cols) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF9F7] border border-black/5 shadow-inner">
                  <img
                    src={activeDisplayImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-300"
                  />

                  {/* Corner Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5 pointer-events-none">
                    {product.tag === "Sale" && (
                      <span className="item-tag item-tag_red">Sale</span>
                    )}
                    {product.tag === "New" && (
                      <span className="item-tag item-tag_green">New</span>
                    )}
                  </div>

                  {/* Wishlist Heart */}
                  <button
                    type="button"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow flex items-center justify-center transition-all ${
                      isWishlisted ? "text-red-500 scale-110" : "text-black/40 hover:text-red-500"
                    }`}
                    aria-label="Save to Wishlist"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </button>
                </div>

                {/* Thumbnails Row */}
                {productImages.length > 1 && (
                  <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2">
                    {productImages.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedImage(img)}
                        className={`w-20 h-24 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                          activeDisplayImage === img ? "border-primary shadow-md" : "border-black/10 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt={`${product.name} thumb ${idx}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Product Info & Actions (6 cols) */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-secondary block mb-2">
                    {product.category}
                  </span>

                  <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary mb-3 leading-tight">
                    {product.name}
                  </h2>

                  {/* Rating & Feedback text */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center gap-1 text-secondary text-sm">
                      {"★".repeat(5)}
                    </div>
                    <span className="text-xs text-neutral-text/50 font-medium">
                      ({reviewsList.length} verified customer reviews)
                    </span>
                  </div>

                  <p className="text-neutral-text/75 text-xs sm:text-sm leading-relaxed mb-6 pb-6 border-b border-black/10">
                    {product.description}
                  </p>

                  {/* Characteristics Table */}
                  <ul className="space-y-2.5 text-xs mb-6">
                    <li className="flex items-center gap-4">
                      <span className="text-neutral-text/50 uppercase tracking-wider w-24">Status:</span>
                      <span className="font-bold text-green-700 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-600 inline-block" />
                        In Stock &amp; Ready to Ship
                      </span>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="text-neutral-text/50 uppercase tracking-wider w-24">Article / SKU:</span>
                      <span className="font-bold text-primary font-mono">{product.sku || "000845DZ1"}</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="text-neutral-text/50 uppercase tracking-wider w-24">Fabric:</span>
                      <span className="font-medium text-primary">100% Organic European Blend</span>
                    </li>
                  </ul>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-3 mb-8">
                    <span className="font-heading text-3xl font-extrabold text-primary">
                      ${product.ssPrice}
                    </span>
                    {product.oldPrice && (
                      <span className="text-lg text-neutral-text/40 line-through">
                        ${product.oldPrice}
                      </span>
                    )}
                  </div>

                  {/* Size Selector */}
                  {product.sizes && product.sizes.length > 0 && (
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                          Select Size:
                        </span>
                        <span className="text-xs text-neutral-text/50 cursor-pointer underline hover:text-primary">
                          Size Guide
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5 flex-wrap">
                        {product.sizes.map((size) => (
                          <label key={size} className="size-option-label">
                            <input
                              type="radio"
                              name="apparel-size"
                              value={size}
                              checked={selectedSize === size}
                              onChange={() => setSelectedSize(size)}
                              className="sr-only"
                            />
                            <span className="size-badge uppercase">
                              {size}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quantity & Add to Cart */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-black/10">
                    <div className="count-stepper self-center sm:self-auto">
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        aria-label="Decrease Quantity"
                      >
                        -
                      </button>
                      <input type="text" readOnly value={quantity} />
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => q + 1)}
                        aria-label="Increase Quantity"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="fashion-button flex-1 py-4 text-center cursor-pointer"
                    >
                      Add To Shopping Bag
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Product Tabs: Description & Reviews */}
        <section className="py-12 border-b border-black/5 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Tabs Header */}
            <div className="flex items-center gap-8 border-b border-black/10 mb-8">
              <button
                type="button"
                onClick={() => setActiveTab("description")}
                className={`py-3 text-sm font-bold uppercase tracking-wider border-b-2 cursor-pointer transition-colors ${
                  activeTab === "description" ? "border-primary text-primary" : "border-transparent text-neutral-text/40 hover:text-primary"
                }`}
              >
                Description &amp; Care
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("reviews")}
                className={`py-3 text-sm font-bold uppercase tracking-wider border-b-2 cursor-pointer transition-colors ${
                  activeTab === "reviews" ? "border-primary text-primary" : "border-transparent text-neutral-text/40 hover:text-primary"
                }`}
              >
                Customer Reviews ({reviewsList.length})
              </button>
            </div>

            {/* Description Tab Content */}
            {activeTab === "description" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-neutral-text/75 leading-relaxed">
                <div>
                  <h3 className="font-heading text-base font-bold uppercase text-primary mb-3">
                    Fabrication &amp; Craftsmanship
                  </h3>
                  <p className="mb-4">
                    Every piece in the Modern Meadow ready-to-wear edit is tailored with meticulous attention to line, drape, and movement. Sourced directly from certified heritage mills, the yarns are pre-washed for shrink resistance and lasting tactile softness.
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-neutral-text/70">
                    <li>100% natural, breathable organic weave</li>
                    <li>French bound seams and reinforced stress points</li>
                    <li>Environmentally responsible low-impact dyes</li>
                    <li>Machine wash delicate cycle in cold water; hang to dry</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-base font-bold uppercase text-primary mb-3">
                    Shipping &amp; Complimentary Returns
                  </h3>
                  <p className="mb-4">
                    We ship swiftly via USPS / UPS in sustainable recyclable mailers. If your fit or color isn&apos;t completely ideal, return or exchange within 30 days of arrival with tags attached.
                  </p>
                  <p className="text-xs text-neutral-text/60">
                    Boutique Support: support@modernmeadowwomenswearshop.com
                  </p>
                </div>
              </div>
            )}

            {/* Reviews Tab Content */}
            {activeTab === "reviews" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Reviews List (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  {reviewsList.map((rev) => (
                    <article key={rev.id} className="p-6 rounded-2xl bg-[#FAF9F7] border border-black/5">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-heading font-bold text-sm text-primary uppercase">
                          {rev.author}
                        </h4>
                        <span className="text-[0.68rem] text-neutral-text/40 uppercase tracking-wider">
                          {rev.date}
                        </span>
                      </div>
                      <div className="text-secondary text-xs mb-2">
                        {"★".repeat(rev.rating)}
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-text/75 leading-relaxed">
                        {rev.text}
                      </p>
                    </article>
                  ))}
                </div>

                {/* Leave a Review Form (5 cols) */}
                <div className="lg:col-span-5 bg-[#FAF9F7] p-8 rounded-3xl border border-black/5">
                  <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-primary mb-2">
                    Leave a Review
                  </h3>
                  <p className="text-xs text-neutral-text/60 mb-6">
                    Share your impressions of the fit, fabric, and styling with our community.
                  </p>

                  {reviewSubmitted ? (
                    <div className="p-4 bg-green-50 border border-green-200 text-green-700 text-xs font-bold rounded-xl text-center">
                      ✓ Thank you! Your review has been posted.
                    </div>
                  ) : (
                    <form onSubmit={handleAddReview} className="space-y-4">
                      {/* Rating Selector */}
                      <div>
                        <label className="text-xs uppercase tracking-wider font-bold text-neutral-text/70 block mb-1">
                          Rating
                        </label>
                        <div className="flex gap-2 text-xl text-secondary cursor-pointer">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setNewReviewRating(star)}
                              className="focus:outline-none"
                            >
                              {star <= newReviewRating ? "★" : "☆"}
                            </button>
                          ))}
                        </div>
                      </div>

                      <textarea
                        value={newReviewText}
                        onChange={(e) => setNewReviewText(e.target.value)}
                        placeholder="Write your feedback on fit, material, and sizing..."
                        required
                        rows={4}
                        className="w-full bg-white border border-black/15 rounded-xl p-3 text-xs focus:outline-none focus:border-secondary"
                      />

                      <input
                        type="text"
                        value={newReviewAuthor}
                        onChange={(e) => setNewReviewAuthor(e.target.value)}
                        placeholder="Your full name"
                        required
                        className="w-full bg-white border border-black/15 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-secondary"
                      />

                      <input
                        type="email"
                        value={newReviewEmail}
                        onChange={(e) => setNewReviewEmail(e.target.value)}
                        placeholder="Your email address"
                        required
                        className="w-full bg-white border border-black/15 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-secondary"
                      />

                      <button
                        type="submit"
                        className="fashion-button w-full text-xs"
                      >
                        Post a Review
                      </button>
                    </form>
                  )}
                </div>

              </div>
            )}

          </div>
        </section>

        {/* You Viewed / Recommended Products */}
        <BestSellers />

      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
