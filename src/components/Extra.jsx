import React from 'react';

const Extra = () => {
    return (
        <div className=" container  mx-auto my-8">
            {/* How It Works Section */}
            <section className=" py-12 px-4 ">
                <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="text-center bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Step 1: Report a Lost Item</h3>
                        <p className="text-gray-600">
                            If you've lost something, simply report it by filling out the form with all relevant details, including description and location.
                        </p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Step 2: Browse Found Items</h3>
                        <p className="text-gray-600">
                            Browse through items found by others. You might find your lost belongings, or maybe someone else’s.
                        </p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Step 3: Contact the Owner</h3>
                        <p className="text-gray-600">
                            If you find an item or your lost item is reported, get in touch directly through the platform to arrange a reunion.
                        </p>
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="py-12 px-4">
                <h2 className="text-3xl font-bold text-center mb-6">Success Stories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img
                            src="https://i.ibb.co.com/ysnP5dM/image.png"
                            alt="Success Story 1"
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold">Lost Wallet Found</h3>
                        <p className="text-gray-600">"I lost my wallet at the park. Thanks to this platform, I was able to retrieve it the next day."</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img
                            src="https://i.ibb.co.com/C9zkrbc/image.png"
                            alt="Success Story 2"
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold">Lost Dog Reunited</h3>
                        <p className="text-gray-600">"My dog went missing, but I found him through a post. I'm so grateful for this service!"</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img
                            src="https://i.ibb.co.com/7j24yy0/image.png"
                            alt="Success Story 3"
                            className="w-full h-40  rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold">Found Necklace Returned</h3>
                        <p className="text-gray-600">"A necklace I lost during a trip was found by someone, and we were able to meet up and return it."</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Extra;
