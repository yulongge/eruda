import Tool from '../DevTools/Tool.es6'

export default class Network extends Tool
{
    constructor()
    {
        super();
        this.name = 'network';
    }
    init($el)
    {
        super.init($el);
    }
}