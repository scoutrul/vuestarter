<template>
    <div class="container">
        <h1>Live</h1>
        <div>
            <div v-for="fixture of fixtures" :key="fixture.fixture_id">
                <div>
                    {{fixture.goalsHomeTeam}} - {{fixture.goalsAwayTeam}}
                </div>
                <div>
                    {{fixture.homeTeam}} -vs- {{fixture.awayTeam}}
                </div>
                <div>{{fixture.round}}</div> 
            </div>
        </div>
    </div>
</template>

<script>
import unirest from 'unirest';
import api from '@/services/';

export default {
    data: () => ({
        fixtures: {}
    }),
    mounted(){
        api.getApi("fixtures/live").then(res => {
            console.log(res);
            this.fixtures = res.body.api.fixtures});
    }
};
</script>
<style></style>

// "fixture_id":"362"
// "event_timestamp":"1552152600"
// "event_date":"2019-03-09T17:30:00+00:00"
// "league_id":"2"
// "round":"Premier League - 30"
// "homeTeam_id":"50"
// "awayTeam_id":"38"
// "homeTeam":"Manchester City"
// "awayTeam":"Watford"
// "status":"2nd Half Started"
// "statusShort":"2H"
// "goalsHomeTeam":"0"
// "goalsAwayTeam":"0"
// "halftime_score":"0 - 0"
// "final_score":NULL
// "penalty":NULL
// "elapsed":"45"
// "firstHalfStart":"1552152600"
// "secondHalfStart":"1552156200"