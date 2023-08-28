/**
 * Wizard
 */
const steps = {
    steps: [
        {
            container: '#stepIntro',
            validate: () => { return true }
        },
        {
            container: '#stepFile',
            validate: () => {
                var inputFiles = $('#fileInput')
                return (inputFiles.val().length > 0)
            }
        },
        {
            container: '#stepType',
            validate: () => { return true }
        },
        {
            container: '#stepCrop',
            validate: () => { return true }
        },
        {
            container: '#stepDownload',
            validate: () => { return true }
        }
    ],
    
    index: 0,
    hasPrev: function(){ return (this.index > 0)},
    prev: function(){
        if(this.index > 0){ this.index--; return true; }
        else return false;
    },
    current: function(){ return this.steps[this.index] },
    hasNext: function(){ return (this.index+1 < this.steps.length)},
    next: function(){ 
        if(this.index+1 < this.steps.length) { this.index++; return true; }
        else return false;
    }

}

const btnPrev = $('#btnPrev')
    btnPrev.enable = function(){ this.prop('disabled', false) }
    btnPrev.disable = function() { this.prop('disabled', true) }
const btnNext = $('#btnNext')
    btnNext.enable = function(a){ this.prop('disabled', false) }
    btnNext.disable = function() { this.prop('disabled', true) }
const form = $('#form')

/**
 * Form ready
 */
form.ready( () => {
    console.log('form ready')
    if( steps.hasNext() && steps.current().validate() ) btnNext.enable();
})

/**
 * Form change
 */
form.change( () => {
    console.log('form change, validate is ' + steps.current().validate())
    
    if( steps.hasNext() && steps.current().validate() ) btnNext.enable()
    else btnNext.disable()
})

/**
 * Next button
 */
btnNext.click( function(){
    if( steps.hasNext() && steps.current().validate() ){
        $('.step').addClass('visually-hidden')
        steps.next()
        $(steps.current().container).removeClass('visually-hidden')
        window.scrollTo(0,0)
    }

    if( steps.hasPrev() ) btnPrev.enable()
    else btnPrev.disable()
    if( steps.hasNext() && steps.current().validate() ) btnNext.enable('click')
    else btnNext.disable()

})

/**
 * Prev Button
 */
btnPrev.click( function() {
    if( steps.hasPrev() ){
        $('.step').addClass('visually-hidden')
        steps.prev()
        $(steps.current().container).removeClass('visually-hidden')
        window.scrollTo(0,0)
    }

    if( steps.hasPrev() ) btnPrev.enable()
    else btnPrev.disable()
    if( steps.hasNext() && steps.current().validate() ) btnNext.enable('click')
    else btnNext.disable()
})