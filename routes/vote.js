module.exports = (router,Keys, Voting) => {
  router.post('/vote', async (req,res)=>{
    let person = req.body.name;
    let result = await Voting.findOne(person);
    if(!result){
      console.log('404 Poititcian');
      return res.status(404).send('Not found Poititcian');
    }
    else{
      let return_vote = {name : result.name, vote : result.vote+1};
      await Voting.save(return_vote);
    }
  })
  .post('/add', async (req,res)=>{

  });
  return router;
};
