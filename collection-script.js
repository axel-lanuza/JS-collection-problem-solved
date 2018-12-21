const GrandParents = [
    //Grand Parent
    {
        _id: 01,
        category: "cat_1",
        parent: null
    },
    {
        _id: 02,
        category: "cat_2",
        parent: null
    },
    {
        _id: 03,
        category: "cat_3",
        parent: null
    }
];

const Parents = [
    {
        _id: 04,
        category: "cat_1_1",
        parent: 01 // category id
    },
    {
        _id: 05,
        category: "cat_1_2",
        parent: 01
    },
    {
        _id: 06,
        category: "cat_1_3",
        parent: 01
    },
    {
        _id: 16,
        category: "cat_2_1",
        parent: 02 // category id
    },
    {
        _id: 17,
        category: "cat_2_2",
        parent: 02
    },
    {
        _id: 18,
        category: "cat_2_3",
        parent: 02
    },
    {
        _id: 28,
        category: "cat_3_1",
        parent: 03 // category id
    },
    {
        _id: 29,
        category: "cat_3_2",
        parent: 03
    },
    {
        _id: 30,
        category: "cat_3_3",
        parent: 03
    }
];

const GrandChildren = [
    {
        _id: 07,
        category: "cat_1_1_1",
        parent: 04
    },
    {
        _id: 08,
        category: "cat_1_1_2",
        parent: 04
    },
    {
        _id: 09,
        category: "cat_1_1_3",
        parent: 04
    },
    {
        _id: 10,
        category: "cat_1_2_1",
        parent: 05
    },
    {
        _id: 11,
        category: "cat_1_2_2",
        parent: 05
    },
    {
        _id: 12,
        category: "cat_1_2_3",
        parent: 05
    },
    {
        _id: 13,
        category: "cat_1_3_1",
        parent: 06
    },
    {
        _id: 14,
        category: "cat_1_3_2",
        parent: 06
    },
    {
        _id: 15,
        category: "cat_1_3_3",
        parent: 06
    },
    {
        _id: 19,
        category: "cat_2_1_1",
        parent: 16
    },
    {
        _id: 20,
        category: "cat_2_1_2",
        parent: 16
    },
    {
        _id: 21,
        category: "cat_2_1_3",
        parent: 16
    },
    {
        _id: 22,
        category: "cat_2_2_1",
        parent: 17
    },
    {
        _id: 23,
        category: "cat_2_2_2",
        parent: 17
    },
    {
        _id: 24,
        category: "cat_2_2_3",
        parent: 17
    },
    {
        _id: 25,
        category: "cat_2_3_1",
        parent: 18
    },
    {
        _id: 26,
        category: "cat_2_3_2",
        parent: 18
    },
    {
        _id: 27,
        category: "cat_2_3_3",
        parent: 18
    },
    {
        _id: 31,
        category: "cat_3_1_1",
        parent: 28
    },
    {
        _id: 32,
        category: "cat_3_1_2",
        parent: 28
    },
    {
        _id: 33,
        category: "cat_3_1_3",
        parent: 28
    },
    {
        _id: 34,
        category: "cat_3_2_1",
        parent: 29
    },
    {
        _id: 35,
        category: "cat_3_2_2",
        parent: 29
    },
    {
        _id: 36,
        category: "cat_3_2_3",
        parent: 29
    },
    {
        _id: 37,
        category: "cat_3_3_1",
        parent: 30
    },
    {
        _id: 38,
        category: "cat_3_3_2",
        parent: 30
    },
    {
        _id: 39,
        category: "cat_3_3_3",
        parent: 30
    }
];

function retrieveGrandChildrenByGrandParentCategoryName(
    grandParentCategoryName
) {
    GrandParents.forEach(data => {
        if (data.parent === null && data.category === grandParentCategoryName) {
            Parents.forEach(data2 => {
                if (data2.parent === data._id) {
                    GrandChildren.forEach(data3 => {
                        if (data3.parent === data2._id) {
                            console.log(
                                `Grand Category ${grandParentCategoryName}`,
                                "Grand Children",
                                 data3
                            );
                        }
                    });
                }
            });
        }
    });
}


// change the category name below cat_1 OR cat_2 OR cat_3

retrieveGrandChildrenByGrandParentCategoryName("cat_2");
