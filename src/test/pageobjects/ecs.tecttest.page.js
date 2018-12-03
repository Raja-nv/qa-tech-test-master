import Page from './page'

class ecsTest extends Page {
    /**
     * define elements
     */
    get renderButton () { return $('//*[@data-test-id="render-challenge"]') }
    get challengeSection () { return $('#challenge') }
    get challengeSection () { return $('#challenge') }
    get rowOneValues () { return $('//tr[@id="rowOne"]') }
    get rowTwoValues () { return $('//tr[@id="rowTwo"]') }
    get rowThreeValues () { return $('//tr[@id="rowThree"]') }
    get submitChallengeOne () { return $('//*[@data-test-id="submit-1"]') }
    get submitChallengeTwo () { return $('//*[@data-test-id="submit-2"]') }
    get submitChallengeThree () { return $('//*[@data-test-id="submit-3"]') }
    get submitChallengeFour () { return $('//*[@data-test-id="submit-4"]') }
    get submitAnswerButton () { return $('//*[@data-test-id="submit-answers"]') }


    /**
     * define or overwrite page methods
     */
    open () {
        super.open('http://localhost:3000/');
    }

    renderbuttonsubmit () {
        this.renderButton.click();
    }

    answerbuttonsubmit () {
        this.submitAnswerButton.click();
    }

    challegeSectionisVisible () {
       this.challengeSection.moveToObject(); 
       return this.challengeSection.isVisible();
    }

    getrowOneValues(){
        var array1 = this.rowOneValues.$$('td').map(element => {return element.getText()});
        return array1;
    }
    getrowTwoValues(){
        var array2 = this.rowTwoValues.$$('td').map(element => {return element.getText()});
        return array2
    }
    getrowThreeValues(){
        var array3 = this.rowThreeValues.$$('td').map(element => {return element.getText()});
        return array3;
    }

    arrChallengeSolution(array) {        
        var rightSum = array.reduce((acc, val) => acc + val, 0), leftSum = 0; 
        for (var i = 0; i < array.length; i++) {
            rightSum = rightSum-array[i];
            if (rightSum == leftSum) return i; 
            leftSum = leftSum+array[i];
        }
        return null;
    }
}
export default new ecsTest()