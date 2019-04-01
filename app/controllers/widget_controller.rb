class WidgetController < ActionController::Base
  def show
    @token = params[:token]
  end

  def fetch
    render json: { data: { message: 'Hello from compiled EATE React!', jobs: [1, 2, 3] } }
  end

  def import_logs
    render json: { sucess: true }
  end
end
