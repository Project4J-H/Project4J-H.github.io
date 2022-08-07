from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///base.db'
app.config['SECRET_KEY'] = "my super secret key"
db = SQLAlchemy(app)

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), nullable=False)
    score = db.Column(db.String(120), nullable=False)
    
    def __repr__(self):
        return '<Name %r>' % self.name
    
    class UserForm(FlaskForm):
        name = StringField("name", validators=[DataRequired()])
        score = StringField("score", validators=[DataRequired()])
        submit = SubmitField("Submit")
        
    class NamerForm(FlaskForm):
        name = StringField("name", validators=[DataRequired()])
        submit = SubmitField("Submit")
        
 #   __tablename__="index"
  #  id = db.Column(db.Integer, primary_key = True)
   # username_ = db.Column(db.String(120), unique=True)
   # first_name_ = db.Column(db.String(120), unique=True)
    #last_name_ = db.Column(db.String(120), unique=True)
   # email_ = db.Column(db.String(120), unique=True)
    
   # def __init__(self, username_, email_, first_name_, last_name_):
    #    self.username_=username_
     #   self.first_name_=first_name_
      #  self.last_name_=last_name_
       # self.email_=email_
    
# create function to return string

#def __repr__(self):
 #   return '<Name %r>' % self.id
    

score = []

#class Data(db.Model):
 #   __tablename__="data"
  #  userName=db.Column(db.String(30), primary_key=True,unique=True)
   # firstName=db.Column(db.String(30))
    #lastName=db.Column(db.String(30))
   # score= db.Column(db.Integer)  

#def __init__(self,userName_,firstName_,lastName_,score_):
 #   self.userName_=userName_
  #  self.firstName_=firstName_
   # self.lastName_=lastName_
    #self.score_=score_

@app.route("/", methods=["GET", "POST"])
def base():
    name = None
    form = UserForm()
    if form.validate_on_submit():
        user = Users.query.filter_by(email=form.email.data).first()
        if user is None:
            user = Users(name=form.name.data, email =form.email.data)
            db.session.add(user)
            db.session.commit()
            name = form.name.data
            form.name.data =''
            form.email.data = ''
            flash ("User added sucessfully")
            our_users = users.query.order_by(users.date_added)
            
            
            
   #  if request.method=="POST":
 #       username = request.form["username"]
    #    score = request.form["score"]
      #  first_name = request.form.get("first_name")
       # last_name = request.form.get("last_name")
       # email = request.form.get("email")
    #    score.append(f"{username}") 
     #           first_name} last_name} | email}")

 
        return render_template("base.html", form=form, name=name, our_users=our_users)


@app.route("/index", methods=["GET", "POST"])
def index():
  #  if request.method=="POST":
   #     username=request.form["username_name"]
   #     first_name=request.form["first_name_name"]
   #     last_name=request.form["last_name_name"]
   #     email=request.form["email_name"]
    #    print(request.form)
        
     #   index=index(username, first_name, last_name, email)
  #      db.session.add(index)
   #     db.session.commit()

        return render_template("index.html")
    
 #   form = request.form()
  #  if form.is_submitted():
   #     result= request.form
    #    return render_template("base.html", result=result)
   # return render_template("index.html", form=form)
    
   # title = "index List"
  #  if request.method == "POST":
 #       index_name = request.form["name"]
 #       username = index_name['name']
#       first_name = index_name['name']
 #       last_name = index_name['name']
        
#        new_index = index(name=index_name)
    
#        try:
#            db.session.add(new_index)
#            db.session.commit()
#            return redirect("/index")
#        except:
#            return "Error"
    
    
#    else:
#        index = index.query.order_by(index.date_created)
#        return render_template("index.html", title=title, index=index)



if __name__=='__main__':
    app.run(debug=True)
    