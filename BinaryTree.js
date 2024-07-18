class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        if (root.val < newNode.val) {
            if (!root.left) root.left = newNode;
            else return this.insertNode(root.left, newNode)
        } else {
            if (!root.right) root.right = newNode;
            else return this.insertNode(root.right, newNode)
        }
    }

    search(val, root = this.root) {
        if (!root) return false;
        if (root.val === val) return true;
        if (val < root.val) return this.search(val, root.left);
        else return this.search(val, root.right)
    }

    delete(val) {
        this.root = this.deleteNode(this.root, val)
    }

    deleteNode(root, val) {
        if (!root) return null;
        if (val < root.val) root.left = this.deleteNode(root.left, val);
        else if (val > root.right) root.right = this.deleteNode(root.right, val);
        else {
            if (!root.left) return root.right;
            else if (!root.right) return root.left;
            root.val = this.minVal(root.right);
            root.right = this.deleteNode(root.right, root.val)
        }
        return root
    }
    minVal(root = this.root){
        let val = root.val;
        while (root.left) {
            val = root.val;
            root = root.left;
        }
        return val;
    }

    height(root=this.root){
        if (!root) return -1;
        let left = this.height(root.left);
        let right = this.height(root.right);
        return Math.max(left,right)+1
    }
    preOrder(node = this.root) {
        let res = [];
        if (node) {
            res.push(node.value);
            res = res.concat(this.preOrder(node.left));
            res = res.concat(this.preOrder(node.right));
        }
        return res;
    }

    inOrder(node = this.root) {
        let res = [];
        if (node) {
            res = res.concat(this.inOrder(node.left));
            res.push(node.value);
            res = res.concat(this.inOrder(node.right));
        }
        return res;
    }

    postOrder(node = this.root) {
        let res = [];
        if (node) {
            res = res.concat(this.postOrder(node.left));
            res = res.concat(this.postOrder(node.right));
            res.push(node.value);
        }
        return res;
    }
}