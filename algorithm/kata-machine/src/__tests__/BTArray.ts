import { TreeNode } from "@code/BTArray";
import { walkTree } from "@code/BTArray"; 


test("compare link and array", function() {
    const root = {
        value: 16,
        left: {
            value: 14,
            left: {
                value: 8,
                left: {
                    value: 2
                },
                right: {
                    value: 4
                }
            },
            right: {
                value: 7,
                left: {
                    value: 1
                }
            }
        },
        right: {
            value: 10,
            left: {
                value: 9
            },
            right: {
                value: 3
            }
        }
    } as TreeNode<number>;

    let r = ""

    walkTree(root, r);
    
    console.log(r);
})
