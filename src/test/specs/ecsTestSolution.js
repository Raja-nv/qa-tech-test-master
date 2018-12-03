import ecsTest from "../pageobjects/ecs.tecttest.page";
import chai, { assert} from 'chai';
chai.use(require('chai-string'));

describe('Ecs Tech Test', function() {
    it('Click on Render the Challenge Bbutton', function() {
        ecsTest.open();
        ecsTest.renderbuttonsubmit();
        assert.isTrue(ecsTest.challegeSectionisVisible(), "Array challenge section is not Displayed");
    });

    it('Arrays Challenge', function() {
        ecsTest.submitChallengeOne.setValue(ecsTest.arrChallengeSolution(ecsTest.getrowOneValues().map(x => parseInt(x, 10))));
        ecsTest.submitChallengeTwo.setValue(ecsTest.arrChallengeSolution(ecsTest.getrowTwoValues().map(x => parseInt(x, 10))));
        ecsTest.submitChallengeThree.setValue(ecsTest.arrChallengeSolution(ecsTest.getrowThreeValues().map(x => parseInt(x, 10))));
        ecsTest.submitChallengeFour.setValue("Rajasaravanan N V");
        ecsTest.answerbuttonsubmit();
    });
});